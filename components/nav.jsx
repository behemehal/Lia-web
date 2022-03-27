import React, { createRef, useState } from "react";
import UserButton from "./userButton";
import SecureLS from "secure-ls";
import styles from "./nav.module.css";
import SearchBar from "./searchBar";
import AccountPopup from "./AccountPopup";
import AccountPopupStyle from "./AccountPopup.module.css";
import UserButtonComponent from "./userButton.module.css";

export default function () {
  const [dimensions, setDimensions] = React.useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  React.useLayoutEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    document.addEventListener("click", function (e) {
      const accountBtn = document.querySelector(`.${styles.navbarBtn}`);

      var accountBtbClicked =
        accountBtn.contains(e.target) || styles.navbarBtn == e.target;

      console.log("Close btn");

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

      if (accountBtbClicked) {
        let accountPopup = document.querySelector(
          `.${AccountPopupStyle.AccountPopup}`
        );

        accountPopup.style.left = (accountBtn.getBoundingClientRect().x - (200 - accountBtn.getBoundingClientRect().width)) + "px";
        document
          .querySelector(`.${AccountPopupStyle.AccountPopup}`)
          .classList.replace("popupHidden", "popupActive");
      }
    });

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  let openAccountPanel = () => {
    setDimensions({
      width: dimensions.width,
      accountPopupOpen: !dimensions.accountPopupOpen,
      searchBarOpen: dimensions.searchBarOpen,
    });
  };

  return (
    <div className={styles.navbar}>
      <img src="/side.png" alt="logo" />
      <SearchBar className={styles.navbarSearchBox} />
      <UserButton
        onClick={openAccountPanel}
        className={styles.navbarBtn}
        user={"ahmedo"}
      />
      <AccountPopup open={false} />
    </div>
  );
}
