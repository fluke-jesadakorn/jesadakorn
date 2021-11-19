import React from 'react'
import { firestore } from '../../configs/firebase'
import dynamic from 'next/dynamic'
const EditorJs = dynamic(() => import('../../components/Editor'), { ssr: false });

const Article = ({ content }) => {
    return (
        <EditorJs content={content} viewMode={true} />
    )
}

export const getStaticPaths = async () => {
    const collection = await firestore.collection(`articles`).get()
    const paths = collection.docs.map(doc => {
        return { params: { article: doc.data().title } }
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const content = await firestore.doc(`articles/${params.article}`).get()
    return {
        props: {
            content: content.data()
        },
        revalidate: 60 * 15
    }
}

export default Article
