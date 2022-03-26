import React from "react";
import Icon from "./icon";
import styles from "./userButton.module.css";
import Link from "next/link";

class UserButton extends React.Component {
  render() {
    if (this.props.mini) {
      console.log("Is Mini:", this.props.mini, typeof this.props.mini);
      return (
        <div
          className={`${
            (this.props.className != undefined
              ? styles.userButtonCenter + " " + this.props.className
              : styles.userButtonCenter) +
            " " +
            styles.mini
          }`}
        >
          {this.props.user ? (
            <div className={styles.userButton + " " + styles.miniUserButton}>
              <Icon
                className={styles.Icon}
                size="24px"
                name="expand_more"
                color="white"
              />
            </div>
          ) : (
            <Icon
              className={styles.Icon + " " + styles.miniUserButtonIcon}
              size="24px"
              name="login"
              color="white"
            />
          )}
        </div>
      );
    } else {
      console.log(
        "Not Mini:",
        this.props.mini,
        `${
          this.props.className != undefined
            ? styles.userButtonCenter + " " + this.props.className
            : styles.userButtonCenter
        }`
      );
      return (
        <div
          className={`${
            this.props.className != undefined
              ? styles.userButtonCenter + " " + this.props.className
              : styles.userButtonCenter
          }`}
        >
          {this.props.user ? (
            <div className={styles.userButton}>
              <Link className={styles.Text} href="/logout">
                user
              </Link>
              <Icon
                className={styles.Icon}
                size="24px"
                name="expand_more"
                color="white"
              />
            </div>
          ) : (
            <div className={styles.userButton}>
              <Link className={styles.Text} href="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      );
    }
  }
}

export default UserButton;
