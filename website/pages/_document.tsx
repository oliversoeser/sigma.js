import Document, { DocumentProps, Head, Html, Main, NextScript } from "next/document";
import React from "react";

const CUSTOM_CSS = `
  body {
    display: block !important;
    visibility: hidden;
  }
`;

export default class CustomDocument extends Document<DocumentProps & { bodyClassName?: string }> {
  render() {
    const bodyClassName = this.props?.__NEXT_DATA__?.props?.pageProps?.bodyClassName;
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="images/favicon-16x16.ico" sizes="16x16" />
          <link rel="shortcut icon" href="images/favicon-32x32.ico" sizes="32x32" />
          <link rel="shortcut icon" href="images/favicon-96x96.ico" sizes="96x96" />
          <style>{CUSTOM_CSS}</style>
        </Head>
        <body className={bodyClassName}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}