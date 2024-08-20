import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import "../scss/layouts/NavHeader.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavHeader = ({ page }) => {
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
NavHeader.propTypes = {
  page: PropTypes.string,
};
export default NavHeader;
