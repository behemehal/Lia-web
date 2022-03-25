import React from "react";
import styles from "./searchBar.module.css";

class SearchBar extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className={styles.holder}>
          <div className={styles.whiteSection}>
            <input
              disabled
              type="text"
              placeholder="Search packages... (Work In Progress)"
            />
          </div>
          <div className={styles.searchSection}></div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
