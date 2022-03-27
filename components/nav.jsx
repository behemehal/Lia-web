import React from "react";
import UserButton from "./userButton";
import styles from "./nav.module.css";
import SearchBar from "./searchBar";
import AccountPopup from "./AccountPopup";

export default function () {
  console.log("User:", typeof window  === 'undefined' ? false : window.user ? window.user : false)
  return (
    <div className={styles.navbar}>
      <img src="/side.png" alt="logo" />
      <SearchBar className={styles.navbarSearchBox} />
      <UserButton
        className={styles.navbarBtn}
        user={typeof window  === 'undefined' ? false : window.user ? window.user : false}
      />
      <AccountPopup open={false} />
    </div>
  );
}
