import EditorJs from 'react-editor-js';
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from '@editorjs/paragraph'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import ImageTool from '@editorjs/image'
import SimpleImage from '@editorjs/simple-image'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRef } from 'react'
import axios from 'axios'
import { Button, notification } from 'antd';
const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

const EditorContainer = styled.div`
    padding: 2rem;
    #duplicate{
        color: red;
    }
    /* .ce-settings__button--delete{
        display: none;
    } */
`
class CustomImageTool extends ImageTool {
    constructor({ api, data, config }) {
        super({ api, data, config })
        this.data = data
        this.config = config
        this.api = api
    }

    removed() {
        let str = this.data.file.url.replace('https://storage.googleapis.com/download/storage/v1/b/jesadakorn.appspot.com/o/', "")
        str = str.split('?')[0]
        axios.delete(`${ENDPOINT}/api/delete/${str}`)
    }

}

const EDITOR_JS_TOOLS = {
    paragraph: Paragraph,
    embed: Embed,
    table: Table,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: {
        class: CustomImageTool,
        config: {
            endpoints: {
                byFile: `${ENDPOINT}/api/upload`, // Your backend file uploader endpoint
            },
        }
    },
    raw: Raw,
    header: Header,
    quote: Quote,
    marker: Marker,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    // simpleImage: SimpleImage,
}

const Editor = ({ createMode, updateMode, content, viewMode }) => {
    const editorRef = useRef(null)
    const [buttonStatus, setButtonStatus] = useState(false)
    const [data] = useState(content)

    const saveData = async () => {
        const saveContent = await editorRef.current.save()
        axios.post(`/api/saveArticle/${saveContent?.blocks[0]?.data?.text}`, saveContent)
            .then(() => {
                notification.success({ message: 'เพิ่มบทความของท่านเรียบร้อยแล้ว' })
            })
            .catch(err => console.error(err))
    }

    const updateData = async () => {
        const saveContent = await editorRef.current.save()
        axios.post(`/api/updateArticle/${saveContent?.blocks[0]?.data?.text}`, saveContent)
            .then(() => {
                notification.success({ message: 'บันทึกบทความของท่านเรียบร้อยแล้ว' })
            })
            .catch(err => console.error(err))
    }

    const checkFirstBlockDuplicate = async (e) => {
        const saveContent = await editorRef.current.save()
        // const doc = saveContent?.blocks[1]?.data?.text && await axios.get(`/api/articles/${saveContent?.blocks[0]?.data?.text}`) || null
        // if (doc?.data?.exists) {
        //     setButtonStatus(true)
        // }
        // else {
        //     setButtonStatus(false)
        // }

        // const block = await editorRef.current.save()
    }

    return <EditorContainer>

        {
            !createMode || !updateMode &&
            <>
                <Button type='primary' disabled={buttonStatus} onClick={saveData}>Save</Button>
                {buttonStatus && <div id='duplicate'>ไม่สามารถเพิ่มบทความได้เนื่องจากหัวข้อนี้มีในระบบแล้ว</div>}
            </>
        }

        {
            createMode || updateMode &&
            <Button disabled={buttonStatus} onClick={updateData}>Update</Button>
        }

        <EditorJs
            onChange={createMode && checkFirstBlockDuplicate}
            readOnly={createMode || updateMode ? false : true}
            placeholder="เริ่มเขียนบทความ ..."
            instanceRef={ref => editorRef.current = ref}
            tools={EDITOR_JS_TOOLS}
            data={data}
        />
    </EditorContainer>
}

export default Editor;