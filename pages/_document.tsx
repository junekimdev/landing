import Document, { Html, Head, Main, NextScript } from 'next/document';
const GTAG_ID = process.env.GTAG_ID || 'GTM-MXDVTH6';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="no-js">
        <Head />
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTAG_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
