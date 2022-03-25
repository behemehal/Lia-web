import React from "react";
import Icon from "./icon";
import styles from "./userButton.module.css";

class UserButton extends React.Component {
  render() {
    return (
      <div
        className={
          (this.props.className != undefined
            ? styles.userButtonCenter + " " + this.props.className
            : styles.userButtonCenter) +
          " " +
          (this.props.mini ? styles.mini : "")
        }
      >
        {this.props.mini ? (
          this.props.user ? (
            <div className={styles.userButton}>
              <Icon
                className={styles.Icon}
                size="24px"
                name="expand_more"
                color="white"
              />
            </div>
          ) : (
            <Icon
              className={styles.Icon}
              size="24px"
              name="login"
              color="white"
            />
          )
        ) : this.props.user ? (
          <div className={styles.userButton}>
            <a className={styles.Text} href="/logout">
              user
            </a>
            <Icon
              className={styles.Icon}
              size="24px"
              name="expand_more"
              color="red"
            />
          </div>
        ) : (
          <div className={styles.userButton}>
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
