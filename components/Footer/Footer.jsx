import React from "react";
import styles from "./Footer.module.css";
import Google from "../../public/images/PlayStore.svg";
import Image from "next/image";
import AppStore from "../../public/images/AppStore.svg";
function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.detailsContainer}>
        <h1 className={styles.firstHeading}>MINITOUR</h1>
        <p className={styles.secondHeading}>
          {date} © MINITOUR All Rights Reserved.
        </p>
      </div>
      <div className={styles.socialContainer}>
        <h3 className={styles.socialText}>FIND PLACES ON OUR APP</h3>
        <Image
          src={Google}
          alt="Google Play Store"
          className={styles.googleImage}
        />
        <Image src={AppStore} alt="AppStore" className={styles.iosImage} />
      </div>
    </div>
  );
}

export default Footer;
