import { storage } from "../../../configs/firebase";
const storageRef = storage.bucket();

export default async function handler(req, res) {

    return storageRef.file(req.query.image).delete({ ignoreNotFound: true }).then(status => {
        return res.status(200).send({ status: "File was Delete" })
    })

}

export const config = {
    api: {
        externalResolver: true,
    },
}