import "./MainContent.scss";
import "overlayscrollbars/styles/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import Card from "../../components/Card/Card";
import FooterScrollPage from "../../components/FooterScrollPage/FooterScrollPage";

const MainContent = () => {
  return (
    <main className="main-content">
      <OverlayScrollbarsComponent
        className="content-wrapper"
        options={{ scrollbars: { autoHide: "scroll" } }}
      >
        <Card />
        <FooterScrollPage />
      </OverlayScrollbarsComponent>
    </main>
  );
};

export default MainContent;