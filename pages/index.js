import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Feature from "../components/feature";
import SecureLS from "secure-ls";
import useIsomorphicLayoutEffect from "../components/isomorphicEffect";
import { createClient } from "@supabase/supabase-js";

import navBarCss from "../components/nav.module.css";
import AccountPopupStyle from "../components/AccountPopup.module.css";

let loggedIn = false;
export default function Home() {
  const [auth, setAuth] = React.useState("");

  useIsomorphicLayoutEffect(() => {
    (async () => {
      if (typeof window !== "undefined" && !loggedIn) {
        const supabase = createClient(
          "https://ecjdmzrdopsfaqxxtoga.supabase.co",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzUzODg3OCwiZXhwIjoxOTUzMTE0ODc4fQ.Ry7tFw0yDXHRjO0RkNRErIIq-TKSM9ayDedRwFbDUaE"
        );

        var ls = new SecureLS({
          encodingType: "aes",
          isCompression: true,
        });

        const { user, error } = await supabase.auth.api.getUser(
          ls.get("access_token")
        );
        loggedIn = true;
        if (error) {
          ls.remove("access_token");
          //location.href = "/login?type=web";
        } else {
          console.log("User set", user.email);
          window.user = user.email;
          setAuth(user.email);
          console.log("User set", auth);
        }
        document.addEventListener("click", function (e) {

          const accountBtn = document.querySelector(`.${navBarCss.navbarBtn}`);
          var accountBtbClicked =
            accountBtn.contains(e.target) || navBarCss.navbarBtn == e.target;

          document.querySelectorAll(`.popupActive`).forEach(function (btn) {
            if (
              document
                .querySelector(`.${AccountPopupStyle.AccountPopup}`)
                .contains(e.target)
            ) {
              console.log("Ignored");
            } else {
              btn.classList.replace("popupActive", "popupHidden");
            }
          });

          if (accountBtbClicked && window.user) {
            console.log(`.${AccountPopupStyle.AccountPopup}`);
            let accountPopup = document.querySelector(
              `.${AccountPopupStyle.AccountPopup}`
            );

            accountPopup.style.left =
              accountBtn.getBoundingClientRect().x -
              (200 - accountBtn.getBoundingClientRect().width) +
              "px";
            document
              .querySelector(`.${AccountPopupStyle.AccountPopup}`)
              .classList.replace("popupHidden", "popupActive");
          }
        });
      }
    })();
  });

  return (
    <div className="container">
      <Head>
        <title>Lia</title>
      </Head>

      <Nav />

      <main>
        <Feature />
        <h1 className="title">In-Progress</h1>
        <h3 className="center">Auth functions active</h3>
      </main>
    </div>
  );
}
