import Footer from "../layout/Footer";
import Header from "../layout/NavHeader";
import SideBar from "../layout/sideBar";
import MainContent from "../layout/MainContent";

const Search = () => {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="main-page">
        <Header page="search" />
        <MainContent page="search" />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
