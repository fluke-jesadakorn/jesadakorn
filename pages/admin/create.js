import React from 'react'
import dynamic from 'next/dynamic'
const EditorJs = dynamic(() => import('../../components/Editor'), { ssr: false });

const Create = () => {
    return (
        <div>
            <EditorJs createMode={true} />
        </div>
    )
}

export default Create
