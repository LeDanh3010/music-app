import { GoHome, GoHomeFill } from "react-icons/go";
import { FaSpotify } from "react-icons/fa";
import { BiSearch, BiSolidSearch } from "react-icons/bi";
import { VscThreeBars } from "react-icons/vsc";
import { FaEarthAmericas } from "react-icons/fa6";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/styles/overlayscrollbars.css";
import "../scss/layouts/SideBar.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { CiMusicNote1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const SideBar = ({ identify }) => {
  const [visible, setVisible] = useState(null);
  let location = useLocation();
  const currentPath = location.pathname;

  const showTooltip = (type) => {
    setVisible(type);
  };
  const hideTooltip = () => {
    setVisible(null);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-nav top">
          <div className="sidebar-logo">
            <Link to="/">
              <FaSpotify className="sidebar-icon" />
              Spotify
            </Link>
          </div>
          <ul className="sidebar-header">
            <li className="sidebar-home">
              {identify ? (
                <NavLink to="/user/home" aria-label="Home">
                  {currentPath === "/user/home" ? (
                    <GoHomeFill className="sidebar-icon" />
                  ) : (
                    <GoHome className="sidebar-icon" />
                  )}
                  Home
                </NavLink>
              ) : (
                <NavLink to="/" aria-label="Home">
                  {currentPath === "/" ? (
                    <GoHomeFill className="sidebar-icon" />
                  ) : (
                    <GoHome className="sidebar-icon" />
                  )}
                  Home
                </NavLink>
              )}
            </li>
            <li className="sidebar-search">
              {identify ? (
                <NavLink to="/user/search" aria-label="Search">
                  {currentPath === "/user/search" ? (
                    <BiSolidSearch className="sidebar-icon" />
                  ) : (
                    <BiSearch className="sidebar-icon" />
                  )}
                  Search
                </NavLink>
              ) : (
                <NavLink to="/search" aria-label="Search">
                  {currentPath === "/search" ? (
                    <BiSolidSearch className="sidebar-icon" />
                  ) : (
                    <BiSearch className="sidebar-icon" />
                  )}
                  Search
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="sidebar-nav bottom">
          <div className="sidebar-bottom-wrapper">
            <ul className="sidebar-header box2">
              <li className="sidebar-home">
                <VscThreeBars className="sidebar-icon" />
                Your Library
              </li>
              <Tippy
                content={
                  <div className="plus-modal-wrapper">
                    <CiMusicNote1 className="plus-modal-icon" />
                    <span onClick={() => showTooltip("btnCreatePlaylist")}>
                      Create a new playlist
                    </span>
                  </div>
                }
                className="custom-tippy-btnPlus"
                visible={visible === "btnPlus"}
                placement="bottom-end"
                onClickOutside={hideTooltip}
                arrow={false}
              >
                <li
                  className="sidebar-plus"
                  onClick={() => showTooltip("btnPlus")}
                >
                  <span>
                    <FaPlus className="sidebar-plus-icon" />
                  </span>
                </li>
              </Tippy>
            </ul>
            <OverlayScrollbarsComponent
              options={{ scrollbars: { autoHide: "scroll" } }}
              defer
              className="create-playlist-container"
            >
              <div className="create-playlist ">
                <div className="create-playlist-text ">
                  <h4>Create your first playlist</h4>
                  <p>It&apos;s easy, we&apos;ll help you</p>
                </div>
                <Tippy
                  content={
                    <div className="create-playlist-box">
                      <h4>Create a playlist</h4>
                      <p>Log in to create and share playlists</p>
                      <div className="create-playlist-btn">
                        <button
                          onClick={() => hideTooltip()}
                          className="not-now"
                        >
                          Not now
                        </button>
                        <Link className="login" to="/login">
                          Login
                        </Link>
                      </div>
                    </div>
                  }
                  className="custom-tippy-btnCreatePlaylist"
                  visible={visible === "btnCreatePlaylist"}
                  placement="right"
                  onClickOutside={hideTooltip}
                  arrow={true}
                  offset={[-50, 186]}
                >
                  <button
                    className="btn create-playlist-btn"
                    onClick={() => showTooltip("btnCreatePlaylist")}
                  >
                    Create Playlist
                  </button>
                </Tippy>
              </div>
              <div className="create-playlist">
                <div className="create-playlist-text">
                  <h4>Let&apos;s find some podcasts to follow</h4>
                  <p>We&apos;ll keep you updated on new episodes</p>
                </div>
                <button
                  className="btn create-playlist-btn"
                  aria-label="Browse Podcasts"
                >
                  Browse podcasts
                </button>
              </div>
            </OverlayScrollbarsComponent>
            {!identify && (
              <div className="sidebar-footer">
                <div className="privacy-policy">
                  <div className="privacy-policy-top">
                    <span>
                      <a href="#" aria-label="Legal">
                        Legal
                      </a>
                    </span>
                    <span>
                      <a href="#" aria-label="Safety & Privacy Center">
                        Safety & Privacy Center
                      </a>
                    </span>
                    <span>
                      <a href="#" aria-label="Privacy Policy">
                        Privacy Policy
                      </a>
                    </span>
                    <span>
                      <a href="#" aria-label="Cookies">
                        Cookies
                      </a>
                    </span>
                    <span>
                      <a href="#" aria-label="About Ads">
                        About Ads
                      </a>
                    </span>
                    <span>
                      <a href="#" aria-label="Accessibility">
                        Accessibility
                      </a>
                    </span>
                  </div>
                  <span>
                    <a href="#" aria-label="Cookies">
                      Cookies
                    </a>
                  </span>
                </div>
                <div className="btn-footer">
                  <button className="btn btn-language">
                    <FaEarthAmericas />
                    <span>English</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
