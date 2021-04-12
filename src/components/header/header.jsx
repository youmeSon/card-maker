import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img src="./images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
      <button className={styles.logoutBtn}>Logout</button>
    </div>
  );
};

export default Header;
