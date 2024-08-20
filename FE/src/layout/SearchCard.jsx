import "../scss/layouts/HomeCard.scss";
import Card from "../components/Card";

const SearchCard = () => {
  const categories = [
    { titleName: "Podcast", image_url: "https://via.placeholder.com/250x150" },
    {
      titleName: "Live Events",
      image_url: "https://via.placeholder.com/250x150",
    },
    {
      titleName: "Made For You",
      image_url: "https://via.placeholder.com/250x150",
    },
    {
      titleName: "New Releases",
      image_url: "https://via.placeholder.com/250x150",
    },
    { titleName: "Summer", image_url: "https://via.placeholder.com/250x150" },
    { titleName: "J-Tracks", image_url: "https://via.placeholder.com/250x150" },
    { titleName: "K-pop", image_url: "https://via.placeholder.com/250x150" },
    { titleName: "Pop", image_url: "https://via.placeholder.com/250x150" },
  ];
  return (
    <>
      <div className="music-items">
        <header className="header-top">
          <h1>
            {/* {title} */}
            Browse all
          </h1>
        </header>
        <ul className="items">
          {categories.map((item, index) => {
            return (
              <Card
                typePage="search"
                key={index}
                titleName={item.titleName}
                image_url={item.image_url}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchCard;
