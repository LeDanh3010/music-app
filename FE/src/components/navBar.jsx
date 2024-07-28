import { GoHomeFill } from "react-icons/go";
import { FaSpotify } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

//import React from "react";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <FaSpotify />
        Spotify
      </div>
      <div className="navbar-link">
        <a href="#">
          <GoHomeFill />
          Home
        </a>
      </div>
      <div className="navbar-search">
        <IoIosSearch />
        Search
      </div>
    </div>
  );
};

export default NavBar;
