import React from "react";
import styles from "./iconButton.module.css";
import Icon from "./icon";

class GithubIcon extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className={
          this.props.className != undefined
            ? styles.iconButton + " " + this.props.className
            : styles.iconButton
        }
      >
        <a className={styles.iconButtonButton}>
          <img width="20s" src="/github.png" alt="github_lg" />
        </a>
      </div>
    );
  }
}

export default GithubIcon;
