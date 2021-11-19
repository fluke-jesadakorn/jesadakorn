import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.min.css'

const Container = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    /* background: #f7f7f7; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

`

function MyApp({ Component, pageProps }) {
  return <>
    <Container />
    <Component {...pageProps} />
  </>
}

export default MyApp
