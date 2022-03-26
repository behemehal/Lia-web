import React, { createRef, useState } from "react";
import UserButton from "./userButton";
import SecureLS from "secure-ls";
import styles from "./nav.module.css";
import SearchBar from "./searchBar";


export default function() {
  const [dimensions, setDimensions] = React.useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  React.useLayoutEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
      });
    }

    let onLoad = () => {
      handleResize();
      console.log("Onload")
    };

    //On window load
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <div className={styles.navbar}>
      <img src="/side.png" alt="logo" />
      <SearchBar className={styles.navbarSearchBox} />
      <UserButton
        mini={dimensions ? dimensions.width < 400 : false}
        className={styles.navbarBtn}
        user={"ahmedo"}
      />
    </div>
  );
}
