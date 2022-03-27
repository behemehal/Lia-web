import Head from "next/head";
import styles from "../components/login.module.css";
import Icon from "../components/icon";
import SecureLS from "secure-ls";

export default function Login() {
  var urlSearchParams = typeof window == 'undefined' ? null : new URLSearchParams(location.href.split("#")[1]);
  var params = typeof window == 'undefined' ? null : Object.fromEntries(urlSearchParams.entries());
  var valid = params != null && new URLSearchParams(location.url).get("type") == null && params["access_token"] != null;
  if (!valid) {
    return (
      <div className={styles.body}>
        <Head>
          <title>Lia - Error</title>
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
          <meta name="title" content="Lia - Error" />
        </Head>
        <main className="center">
          <br />
          <br />
          <Icon name="error" color="white" size="66px" />
          <br />
          <h3 className="wlight">Error</h3>
          <p className="wlight">Missing parameters</p>
        </main>
        <style jsx global>{`
          body {
            background-color: #d0114d;
          }
        `}</style>
      </div>
    );
  } else if (
    params["error_code"] != null &&
    params["error_description"] != null
  ) {
    return (
      <div className={styles.body}>
        <Head>
          <title>Lia - Error</title>
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
          <meta name="title" content="Lia - Error" />
        </Head>
        <main className="center">
          <br />
          <br />
          <Icon name="error" color="white" size="66px" />
          <br />
          <h3 className="wlight">Error</h3>
          <p className="wlight">{params["error_description"]}</p>
        </main>
        <style jsx global>{`
          body {
            background-color: #d0114d;
          }
        `}</style>
      </div>
    );
  } else {
    var ls = new SecureLS({ encodingType: "aes" });
    if (ls.get("access_token") == null || ls.get("access_token") != params["access_token"]) {
      ls.set("access_token", params["access_token"]);
      console.log("OK SET");
    }
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    return (
      <div className={styles.body}>
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
          <br />
          <Icon name="verified_user" color="white" size="66px" />
          <br />
          <h3 className="wlight">Signing In</h3>
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
