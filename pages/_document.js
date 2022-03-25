import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect"></link>
        <link href="https://fonts.gstatic.com" rel="preconnect"></link>
        <meta
          name="keywords"
          content="ellie,ellie programing language,program,programing language,behemehal,lia,package manager"
        />
        <meta name="robots" content="index, follow" />
        <meta name="copyright" content="Behemehal" />
        <meta name="language" content="English" />
        <link rel="icon" href="/img/lia.ico" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="Behemehal" />
        <meta
          name="description"
          content="Lia is the universal package manager for ellie"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <meta name="title" content="Lia Package Manager" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
