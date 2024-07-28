import { GoHomeFill } from "react-icons/go";
import { FaSpotify } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import "./navBar.scss";

//import React from "react";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <a href="#">
          <FaSpotify className="nav-icon" />
          <span>Spotify</span>
        </a>
      </div>
      <ul className="navbar-header">
        <li className="navbar-home">
          <a href="#">
            <GoHomeFill className="nav-icon" />
            <span>Home</span>
          </a>
        </li>
        <li className="navbar-search">
          <a href="#">
            <IoIosSearch className="nav-icon" />
            <span>Search</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
