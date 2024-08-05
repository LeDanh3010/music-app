import { GoHomeFill } from "react-icons/go";
import { FaSpotify } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/styles/overlayscrollbars.css";
import "../scss/components/sideBar.scss";

//import React from "react";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-nav">
        <div className="sidebar-logo">
          <a href="#">
            <FaSpotify className="sidebar-icon" />
            <span>Spotify</span>
          </a>
        </div>
        <ul className="sidebar-header">
          <li className="sidebar-home">
            <a href="#">
              <GoHomeFill className="sidebar-icon" />
              <span>Home</span>
            </a>
          </li>
          <li className="sidebar-search">
            <a href="#">
              <IoIosSearch className="sidebar-icon" />
              <span>Search</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-nav ">
        <ul className="sidebar-header box2">
          <li className="sidebar-home">
            <a href="#">
              <VscThreeBars className="sidebar-icon" />
              <span>Your Library</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FaPlus className="sidebar-icon plus" />
            </a>
          </li>
        </ul>
        <OverlayScrollbarsComponent
          options={{ scrollbars: { autoHide: "scroll" } }}
          defer
          className="create-playlist-container"
        >
          <div className="create-playlist">
            <div className="create-playlist-text">
              <h4>Create your first playlist</h4>
              <p>It&apos;s easy, we&apos;ll help you</p>
            </div>
            <button className="btn create-playlist-btn">Create Playlist</button>
          </div>
          <div className="create-playlist">
            <div className="create-playlist-text">
              <h4>Let&apos;s find some podcasts to follow</h4>
              <p>We&apos;ll keep you updated on new episodes</p>
            </div>
            <button className="btn create-playlist-btn">Browse podcasts</button>
          </div>
        </OverlayScrollbarsComponent>
        <div className="sidebar-footer">
          <div className="privacy-policy">
            <div className="privacy-policy-top">
              <span>
                <a href="#">Legal</a>
              </span>
              <span>
                <a href="#">Safety & Privacy Center</a>
              </span>
              <span>
                <a href="#">Privacy Policy</a>
              </span>
              <span>
                <a href="#">Cookies</a>
              </span>
              <span>
                <a href="#">About Ads</a>
              </span>
              <span>
                <a href="#">Accessibility</a>
              </span>
            </div>
            <span>
              <a href="#">Cookies</a>
            </span>
          </div>
          <div className="btn-footer">
            <button className="btn btn-language">
              <FaEarthAmericas />
              <span>English</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
