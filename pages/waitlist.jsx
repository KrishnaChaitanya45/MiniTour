import React from "react";
import SignUp from "../components/SignUp/SignUp";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const WaitList = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar />
      <SignUp />
      <Footer />
    </div>
  );
};

export default WaitList;
