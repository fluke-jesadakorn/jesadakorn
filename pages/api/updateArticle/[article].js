import { firestore } from "../../../configs/firebase";
import { Timestamp } from 'firebase-admin/firestore'
export default async function handler(req, res) {

    const { article } = req.query

    await firestore.doc(`articles/${article}`).set({
        ...req.body,
        title: article,
    }, { merge: true })

    res.status(200).send({ status: "ok " });

}