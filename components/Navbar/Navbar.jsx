import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={`/`} className={styles.firstHeading}>
        MINITOUR
      </Link>
      <h1 className={styles.secondHeading}>San Francisco</h1>
    </div>
  );
};

export default Navbar;
