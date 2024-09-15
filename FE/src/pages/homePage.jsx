import Footer from "../layout/Footer";
import Header from "../layout/NavHeader";
import SideBar from "../layout/sideBar";
import MainContent from "../layout/MainContent";

import "../scss/pages/homePage.scss";
//import React from "react";

const HomePage = () => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-page">
        <Header page="home" />
        <MainContent page="home" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;