import React from "react";
import styles from "./IconButton.module.css";
import Icon from "./icon";

class IconButton extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={
          this.props.className != undefined
            ? styles.formButton + " " + this.props.className
            : styles.formButton
        }
      >
        <a className={styles.formButtonButton}>
          <Icon className={styles.formButtonIcon} icon={this.props.icon} />
        </a>
      </div>
    );
  }
}

export default IconButton;