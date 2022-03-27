import React from "react";
import Head from "next/head";
import styles from "../components/login.module.css";
import LiaEyes from "../components/liaEyes";
import FormInput from "../components/formInput";
import FormButton from "../components/formButton";
import GithubButton from "../components/githubButton";
import formInputStyles from "../components/formInput.module.css";

import { createClient } from "@supabase/supabase-js";

export default function Login() {
  const [input, setInput] = React.useState({
    errorMessage: "",
    mail:
      typeof window == "undefined"
        ? ""
        : document.querySelector("." + formInputStyles.formInputInput).value,
  });

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
      <main>
        <LiaEyes />
        <h1 className="title wlight">Lia Login</h1>
        <br />
        <FormInput
          type="mail"
          onChange={(e) => setInput({ mail: e.target.value })}
          className={styles.formInputs}
          placeholder="Mail"
          icon="alternate_email"
        />
        <br />
        <p className="center wlight">{input.errorMessage}</p>
        <br />
        <FormButton
          onClick={async (e) => {
            e.persist();
            if (input.mail == "") {
              setInput({
                mail: input.mail,
                errorMessage: "Email is required",
              });
            } else {
              const supabase = createClient(
                "https://ecjdmzrdopsfaqxxtoga.supabase.co",
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzUzODg3OCwiZXhwIjoxOTUzMTE0ODc4fQ.Ry7tFw0yDXHRjO0RkNRErIIq-TKSM9ayDedRwFbDUaE"
              );

              let authType = new URLSearchParams(location.search).get("type") != null ? new URLSearchParams(location.search).get("type") : "web";

              const { _, error } = await supabase.auth.signIn(
                {
                  email: input.mail,
                },
                {
                  redirectTo: "https://lia.ellie-lang.org/auth?type=" + authType,
                }
              );
              if (!error) {
                const url = new URL(location.href);
                url.pathname = "/waiting_magic_link";
                url.searchParams.set("mail", input.mail);
                window.location.href = url.href;
              } else {
                if (error.message) {
                  setInput({
                    mail: input.mail,
                    errorMessage: error.message,
                  });
                } else if (error.msg) {
                  setInput({
                    mail: input.mail,
                    errorMessage: error.msg,
                  });
                } else {
                  setInput({
                    mail: input.mail,
                    errorMessage: "Unknown error",
                  });
                }
              }
            }
          }}
          className={styles.formInputs}
        >
          Login
        </FormButton>
        <p className="center wlight">or</p>
        <GithubButton
          onClick={async (e) => {
            e.persist();
            let authType = new URLSearchParams(location.search).get("type") != null ? new URLSearchParams(location.search).get("type") : "web";
            const supabase = createClient(
              "https://ecjdmzrdopsfaqxxtoga.supabase.co",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzUzODg3OCwiZXhwIjoxOTUzMTE0ODc4fQ.Ry7tFw0yDXHRjO0RkNRErIIq-TKSM9ayDedRwFbDUaE"
            );
            const { user, session, error } = await supabase.auth.signIn(
              {
                provider: "github",
              },
              {
                redirectTo: "https://lia.ellie-lang.org/auth?type=" + authType,
              }
            );
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
