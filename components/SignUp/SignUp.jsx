import React from "react";
import Image from "next/image";
import styles from "./SignUp.module.css";
import SignUpVector from "../../public/images/SignUpVector.png";
import Icon from "../../public/images/icon.svg";
const SignUp = () => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.mainContainer}>
        <Image src={SignUpVector} alt="Vector" className={styles.vector} />
        <div className={styles.formContainer}>
          <div className={styles.formHeading}>
            <h1>
              <b>Sign up </b> for our waitlist.
            </h1>
          </div>
          <p>
            We won’t send you spam. Just be the first to know key updates in
            what we’re building.
          </p>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Name" className={styles.input} />
            <input type="text" placeholder="Email" className={styles.input} />
          </div>
          <div className={styles.subscribeContainer}>
            <button>subscribe</button>
            <Image src={Icon} alt="Icon" className={styles.Icon}></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
