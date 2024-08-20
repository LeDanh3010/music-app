import "../scss/layouts/MainContent.scss";
import "overlayscrollbars/styles/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import HomeCard from "../layout/HomeCard";
import FooterScrollPage from "../components/FooterScrollPage";
import PropTypes from "prop-types";
import SearchCard from "./SearchCard";

const MainContent = ({ page }) => {
  return (
    <main className="main-content">
      <OverlayScrollbarsComponent
        className="content-wrapper"
        options={{ scrollbars: { autoHide: "scroll" } }}
      >
        {page === "home" && <HomeCard />}
        {page === "search" && <SearchCard />}
        <FooterScrollPage />
      </OverlayScrollbarsComponent>
    </main>
  );
};
MainContent.propTypes = {
  page: PropTypes.string,
};
export default MainContent;
