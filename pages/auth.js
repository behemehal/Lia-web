import Head from "next/head";
import styles from "../components/login.module.css";
import Icon from "../components/icon";

import { createClient } from "@supabase/supabase-js";

export default function Login() {
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
