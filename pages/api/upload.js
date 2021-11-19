import { storage } from "../../configs/firebase";
import multer from 'multer'

export default async function handler(req, res) {

    const bucket = storage.bucket();

    const upload = multer({
        storage: multer.memoryStorage(),
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
    }).single("image");

    upload(req, res, async (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ status: "error" });
        }

        const { file } = req;

        if (!file) {
            return res.status(400).json({ status: "no file" });
        }

        const { originalname, buffer } = file;

        const fileName = `${Date.now()}-${originalname}`;

        const fileUpload = bucket.file(fileName);

        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype,
            },
        });

        blobStream.on("finish", async () => {
            fileUpload.makePublic()

            return fileUpload.get().then(file => {
                return res.status(200).send({
                    success: 1,
                    file: {
                        url: file[0].metadata.mediaLink
                    }
                })
            })

        });

        blobStream.end(buffer);
    });

}

export const config = {
    api: {
        bodyParser: false,
        externalResolver: true,
    },
}