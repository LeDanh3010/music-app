//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.scss";

import SideBar from "./components/sideBar";
import Footer from "./layout/Footer/Footer";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <SideBar />
        <HomePage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
