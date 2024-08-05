import Footer from "../layout/Footer";
import Header from "../components/NavHeader";
import SideBar from "../components/sideBar";
import MainContent from "../layout/MainContent";

import "../scss/pages/homePage.scss";
//import React from "react";

const HomePage = () => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-page">
        <Header />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
