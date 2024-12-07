import Footer from "../layout/Footer";
import Header from "../layout/NavHeader";
import SideBar from "../layout/SideBar";
import MainContent from "../layout/MainContent";
import "../scss/pages/homePage.scss";

const HomePrivate = () => {
  return (
    <div className="wrapper">
      <SideBar identify="user" />
      <div className="main-page">
        <Header page="home" identify="user" />
        <MainContent page="home" identify="user" />
      </div>
      <Footer identify="user" />
    </div>
  );
};

export default HomePrivate;
