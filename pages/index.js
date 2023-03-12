import Head from "next/head";
import Image from "next/image";
import FirstSection from "../components/firstSection/FirstSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar.jsx";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <FirstSection />
      <Footer />
    </div>
  );
}
