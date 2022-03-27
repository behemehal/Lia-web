import React from "react";
import Icon from "./icon";
import styles from "./userButton.module.css";
import Link from "next/link";

class UserButton extends React.Component {
  render() {
    return (
      <div onClick={this.props.user ? this.props.onClick : null}
        className={`${
          this.props.className != undefined
            ? styles.userButtonCenter + " " + this.props.className
            : styles.userButtonCenter
        }`}
      >
        {this.props.user ? (
          <div className={styles.userButton}>
            <a className={styles.Text} href="#">
              user
            </a>
            <Icon
              className={styles.Icon}
              size="24px"
              name="expand_more"
              color="white"
            />
          </div>
        ) : (
          <div className={styles.userButton + " " + styles.userButtonNonIcon }>
            <a className={styles.Text} href="/login">
              Login
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default UserButton;
