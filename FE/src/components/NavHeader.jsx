//import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import "../scss/components/NavHeader.scss";
import { Link } from "react-router-dom";

const NavHeader = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
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
          <Link to="/signup" className="signUp">
            Sign up
          </Link>
          <Link to="/login" className="login">
            Log in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
