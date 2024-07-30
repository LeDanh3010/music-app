import { GoHomeFill } from "react-icons/go";
import { FaSpotify } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import "./navBar.scss";
import { VscThreeBars } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
//import React from "react";
const NavBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-nav">
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
      <div className="sidebar-nav ">
        <ul className="navbar-header box2">
          <li className="navbar-home">
            <a href="#">
              <VscThreeBars className="nav-icon" />
              <span>Your Library</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaPlus className="nav-icon plus" />
            </a>
          </li>
        </ul>
        <div className="create-playlist-container">
          <div className="create-playlist">
            <div className="text">
              <h4>Create your first playlist</h4>
              <p>It&apos;s easy, we&apos;ll help you</p>
            </div>
            <button className="create-playlist-btn">Create Playlist</button>
          </div>
          <div className="create-playlist">
            <h4>Let&apos;s find some podcasts to follow</h4>
            <p>We&apos;ll keep you updated on new episodes</p>
            <button className="create-playlist-btn">Browse podcasts</button>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="info">
            <span>
              <a href="#">Legal</a>
            </span>
            <span>
              <a href="#">Legal</a>
            </span>
            <span>
              <a href="#">Legal</a>
            </span>
            <span>
              <a href="#">Legal</a>
            </span>
          </div>
          <button>
            <FaEarthAmericas />
            English
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
