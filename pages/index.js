import React from 'react'
import styled from 'styled-components'
import { firestore } from '../configs/firebase'
import Image from 'next/image'

const CardContiner = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border: ${props => props.border || '1px solid black'};
`

const IndexContainer = styled.div`
  margin: 0 auto;
  display: grid;
  width: 80vw;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;

  *{
    background: #fff;
  }

`

const Card = ({ key, title, description, date, imageUrl }) => {
  return (
    <CardContiner key={key}>
      {imageUrl && <img src={imageUrl} width='300' height='300' />}
      <h1>{title}</h1>
      <div></div>
    </CardContiner>
  )
}

const Index = ({ contents }) => {
  return (
    <IndexContainer>
      <div id='hilight'>TTT</div>
      {
        contents.map((content, index) => {
          return Card({
            key: index,
            title: content.title,
            imageUrl: content.blocks?.map(block => block?.data).map(img => img?.file?.url).filter(url => typeof url === 'string')[0],
          })

        })
      }
    </IndexContainer>
  )
}

export const getStaticProps = async ({ params }) => {

  const contents = await firestore.collection(`articles`).get()

  return {
    props: {
      contents: contents.docs.map(doc => doc.data())
    },
    revalidate: 60 * 15
  }
}

export default Index
