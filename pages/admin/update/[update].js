import React from 'react'
import dynamic from 'next/dynamic'
import { firestore } from '../../../configs/firebase';

const EditorJs = dynamic(() => import('../../../components/Editor'), { ssr: false });

const Update = ({ content }) => {
    return (
        <div>
            <EditorJs updateMode={true} content={content} />
        </div>
    )
}

export const getServerSideProps = async ({ params }) => {
    const content = await firestore.doc(`articles/${params.article}`).get()
    return {
        props: {
            content: content.data()
        },
    }
}

export default Update
