import Footer from "../../layout/Footer/Footer";
import Header from "../../components/Nav/header";
import SideBar from "../../components/Sidebar/sideBar";
import MainContent from "../../layout/MainContent/MainContent";

import "./homePage.scss";
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
