import React from "react";
import styles from "./IconButton.module.css";
import Icon from "./icon";

class IconButton extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.className != undefined
            ? styles.formButton + " " + this.props.className
            : styles.formButton
        }
      >
        <a className={styles.formButtonButton} onClick={this.props.onClick}>
            <Icon className={styles.formButtonIcon} icon={this.props.icon} />
        </a>
      </div>
    );
  }
}
