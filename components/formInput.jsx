import React from "react";
import styles from "./formInput.module.css";
import Icon from "./icon";

class FormInput extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.className != undefined
            ? styles.formInput + " " + this.props.className
            : styles.formInput
        }
      >
        <div className={styles.formInputInner}>
          <div className={styles.formInputIcon}>
            <Icon
              className={styles.Icon}
              size="16px"
              name={this.props.icon}
              color="white"
            />
          </div>
          <input
            className={styles.formInputInput}
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default FormInput;
