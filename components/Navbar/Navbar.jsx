import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.firstHeading}>MINITOUR</h1>
      <h1 className={styles.secondHeading}>San Francisco</h1>
    </div>
  );
};

export default Navbar;
