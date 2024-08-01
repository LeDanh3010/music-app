//import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-arrow">
          <button className="header-arrow_icon icon">
            <IoIosArrowBack />
          </button>
          <button className="header-arrow_icon icon">
            <IoIosArrowForward />
          </button>
        </div>
        <div className="header-search">
          <span className="header-search_icon icon">
            <IoIosSearch />
          </span>
          <input type="text" placeholder="What do you want to play?" />
          <span className="header-search_icon icon">
            <IoMdClose />
          </span>
        </div>
        <div className="header-user">
          <a href="#" className="signUp">
            Sign up
          </a>
          <a href="#" className="login">
            Log in
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;