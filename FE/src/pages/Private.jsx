import Footer from "../layout/Footer";
import Header from "../layout/NavHeader";
import SideBar from "../layout/SideBar";
import MainContent from "../layout/MainContent";
import "../scss/pages/homePage.scss";

const Private = () => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-page">
        <Header page="home" identify="user" />
        <MainContent page="home" identify="user" />
      </div>
      <Footer />
    </div>
  );
};

export default Private;
