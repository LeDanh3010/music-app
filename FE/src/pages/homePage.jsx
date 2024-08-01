import Header from "../components/header";
import MusicItem from "../components/musicItems";
import "./homePage.scss";
//import React from "react";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="home-content">
        <div className="content-container">
          <MusicItem />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
