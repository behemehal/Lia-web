import React from "react";
import styles from "./formButton.module.css";

class FormButton extends React.Component {
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
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default FormButton;
