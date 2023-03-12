import React from "react";
import ContentPage from "../components/dynamicPage/ContentPage";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "../public/Dynamic.module.css";
const Dynamic = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <ContentPage />
      <Footer />
    </div>
  );
};

export default Dynamic;
