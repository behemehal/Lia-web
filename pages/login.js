import Head from "next/head";
import Nav from "../components/nav";
import Feature from "../components/feature";
import styles from "../components/login.module.css";
import LiaEyes from "../components/liaEyes";
import FormInput from "../components/formInput";
import FormButton from "../components/formButton";
import GithubButton from "../components/githubButton";

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
        <meta name="title" content="Lia - Login" />
      </Head>
      <main>
        <LiaEyes />
        <h1 className="title wlight">Lia Login</h1>
        <br />
        <FormInput
          type="mail"
          className={styles.formInputs}
          placeholder="Mail"
          icon="alternate_email"
        />
        <br />
        <br />
        <FormButton
          onClick={async () => {
            console.log("Login");
            const supabase = createClient(
              "https://ecjdmzrdopsfaqxxtoga.supabase.co",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzUzODg3OCwiZXhwIjoxOTUzMTE0ODc4fQ.Ry7tFw0yDXHRjO0RkNRErIIq-TKSM9ayDedRwFbDUaE"
            );

            const { user, error } = await supabase.auth.signIn({
              email: "ahmetcanco@gmail.com",
            });

            console.log(user, error);
          }}
          className={styles.formInputs}
        >
          Login
        </FormButton>
        <p className="center wlight">or</p>
        <GithubButton
          onClick={async () => {
            console.log("Github");
            const supabase = createClient(
              "https://ecjdmzrdopsfaqxxtoga.supabase.co",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzUzODg3OCwiZXhwIjoxOTUzMTE0ODc4fQ.Ry7tFw0yDXHRjO0RkNRErIIq-TKSM9ayDedRwFbDUaE"
            );
            const { user, session, error } = await supabase.auth.signIn({
              provider: "github",
            });
            console.log(user, session, error);
          }}
          className={styles.formInputs}
        ></GithubButton>
        <br />
        <br />
        <p className="center wlight">Don't have a account?</p>
        <FormButton className={styles.formInputs}>
          Create lia account
        </FormButton>
      </main>
      <style jsx global>{`
        body {
          background-color: #d0114d;
        }
      `}</style>
    </div>
  );
}
