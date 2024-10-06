import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import "../scss/layouts/NavHeader.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const NavHeader = ({ page, identify }) => {
  const dropdownRef = useRef(null);
  const [showControlUser, setShowControlUser] = useState(false);
  const handleOnclick = (e) => {
    e.stopPropagation();
    setShowControlUser(!showControlUser);
  };
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowControlUser(false);
    }
  };

  useEffect(() => {
    // Attach the event listener to detect outside clicks
    window.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-wrapper">
        {page === "search" && (
          <div className="header-search">
            <span className="header-search_icon icon">
              <IoIosSearch />
            </span>
            <input type="text" placeholder="What do you want to play?" />
            <span className="header-search_icon icon">
              <IoMdClose />
            </span>
          </div>
        )}
        {identify ? (
          <div className="header-user">
            <div
              className="header-private"
              onClick={handleOnclick}
              ref={dropdownRef}
            >
              <span className="header-private-text">A</span>
            </div>
            {showControlUser && (
              <ul className="header-private-list">
                <li>
                  <Link to="">Account</Link>
                </li>
                <li>
                  <Link to="">Profile</Link>
                </li>
                <li>
                  <Link to="">Setting</Link>
                </li>
                <hr className="divider-line" />
                <li>
                  <Link to="">Logout</Link>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="header-user">
            <Link to="/signup" className="signUp">
              Sign up
            </Link>
            <Link to="/login" className="login">
              Log in
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavHeader;
