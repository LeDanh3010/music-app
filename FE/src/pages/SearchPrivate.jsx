import Footer from "../layout/Footer";
import Header from "../layout/NavHeader";
import SideBar from "../layout/SideBar";
import MainContent from "../layout/MainContent";

const SearchPrivate = () => {
  return (
    <div className="wrapper">
      <SideBar identify="user" />
      <div className="main-page">
        <Header page="search" identify="user" />
        <MainContent page="search" />
      </div>
      <Footer identify="user" />
    </div>
  );
};

export default SearchPrivate;
