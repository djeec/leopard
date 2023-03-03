import { Html, Head, Main, NextScript } from 'next/document'

// A custom Document can update the <html> and <body> tags used to render a Page. 
// This file is only rendered on the server, so event handlers like onClick cannot be used in _document

const Document = () => {
  return (
    <Html lang="en">
      <Head>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <body className='bg-light'>
        <div className='container '>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;