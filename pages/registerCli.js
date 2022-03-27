import Head from "next/head";
import styles from "../components/login.module.css";
import Icon from "../components/icon";
import FormInput from "../components/formInput";

export default function Login() {
  let params =
    typeof window !== "undefined"
      ? new URL(document.location).searchParams
      : null;
  if (params == null || params.get("access_token") == null) {
    return (
      <div>
        <Head>
          <title>Lia - Login</title>
          <link href="https://fonts.googleapis.com" rel="preconnect"></link>
          <link href="https://fonts.gstatic.com" rel="preconnect"></link>
          <meta
            name="keywords"
            content="ellie,ellie programing language,program,programing language,behemehal,lia,package manager"
          />
          <meta name="robots" content="index, follow" />
          <meta name="copyright" content="Behemehal" />
          <meta name="language" content="English" />
          <link rel="icon" href="/lia.ico" />
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
          <meta name="title" content="Lia - Login" />
        </Head>
        <main className="center">
          <br />
          Wrong URL
        </main>
        <style jsx global>{`
          body {
            background-color: #d0114d;
          }
        `}</style>
      </div>
    );
  } else {
    return (
      <div className={styles.body}>
        <Head>
          <title>Lia - Auth</title>
          <link href="https://fonts.googleapis.com" rel="preconnect"></link>
          <link href="https://fonts.gstatic.com" rel="preconnect"></link>
          <meta
            name="keywords"
            content="ellie,ellie programing language,program,programing language,behemehal,lia,package manager"
          />
          <meta name="robots" content="index, follow" />
          <meta name="copyright" content="Behemehal" />
          <meta name="language" content="English" />
          <link rel="icon" href="/lia.ico" />
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
          <meta name="title" content="Lia - Auth" />
        </Head>
        <main className="center">
          <br />
          <br />
          <Icon name="verified_user" color="white" size="66px" />
          <br />
          <h3 className="wlight center">Auth complete</h3>
          <h4 className="wlight center">Copy the following code to cli</h4>
          <FormInput
            className="centerElement"
            icon="vpn_key"
            type="text"
            value={params.get("access_token")}
          />
        </main>
        <style jsx global>{`
          body {
            background-color: #d0114d;
          }
        `}</style>
      </div>
    );
  }
}
