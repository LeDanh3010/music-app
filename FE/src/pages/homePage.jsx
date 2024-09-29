import Footer from "../layout/Footer";
import Header from "../layout/NavHeader";
import SideBar from "../layout/SideBar";
import MainContent from "../layout/MainContent";
import "../scss/pages/homePage.scss";

const HomePage = () => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-page">
        <Header page="home" />
        <MainContent page="home" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
