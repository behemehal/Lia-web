import React from "react";
import styles from "./AccountPopup.module.css";
import SecureLS from "secure-ls";

class AccountPopup extends React.Component {
  render() {
    return (
      <div className={styles.AccountPopup + " " + " popupHidden center"}>
        <a
          href="#"
          onClick={() => {
            let ls =
              typeof window == "undefined"
                ? null
                : new SecureLS({ encodingType: "aes" });
            ls.remove("user");
            location.href = location.href;
            console.log(ls.getAllKeys());
          }}
        >
          Logout
        </a>
      </div>
    );
  }
}

export default AccountPopup;
