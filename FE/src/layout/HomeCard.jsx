import "../scss/layouts/HomeCard.scss";
import Card from "../components/Card";

const HomeCard = () => {
  const items = {
    Popular_Artists: [
      {
        name: "Mrs. GREEN APPLE",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "back number",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "Vaundy",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "Yorushika",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "YOASOBI",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "Yanbi",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      // {
      //   id: 7,
      //   name: "Aimyon",
      //   type: "Artist",
      //   image_url: "https://via.placeholder.com/130",
      // },
      // {
      //   id: 8,
      //   name: "Kenshi Yonezu",
      //   type: "Artist",
      //   image_url: "https://via.placeholder.com/130",
      // },
      // {
      //   id: 10,
      //   name: "Creepy Nuts",
      //   type: "Artist",
      //   image_url: "https://via.placeholder.com/130",
      // },
    ],
    Popular_Albums: [
      {
        musicName: "ANTENNA",
        artist: "Mrs. GREEN APPLE",
        image_url: "https://via.placeholder.com/130",
      },
      {
        musicName: "No.0 ~ring~",
        artist: "Number_j",
        image_url: "https://via.placeholder.com/130",
      },
      {
        musicName: "strobo",
        artist: "Vaundy",
        image_url: "https://via.placeholder.com/130",
      },
      {
        musicName: "Happy Ending",
        artist: "Yorushika",
        image_url: "https://via.placeholder.com/130",
      },
      {
        musicName: "SUPER REAL ME",
        artist: "ILLIT",
        image_url: "https://via.placeholder.com/130",
      },
      {
        musicName: "REAL ME",
        artist: "ranbi",
        image_url: "https://via.placeholder.com/130",
      },
      // {
      //   id: 18,
      //   musicName: "I wonder",
      //   artist: "Da-iCE",
      //   image_url: "https://via.placeholder.com/130",
      // },
      // {
      //   id: 20,
      //   musicName: "ユーモア",
      //   artist: "back number",
      //   image_url: "https://via.placeholder.com/130",
      // },
      // {
      //   id: 11,
      //   musicName: "Bling-Bang-Bang-Born",
      //   artist: "Creepy Nuts",
      //   image_url: "https://via.placeholder.com/130",
      // },
    ],
    Popular_Radio: [
      {
        name: "Mrs. GREEN APPLE",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "back number",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "Vaundy",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "Yorushika",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "YOASOBI",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
      {
        name: "YO",
        type: "Artist",
        image_url: "https://via.placeholder.com/130",
      },
    ],
  };
  return (
    <>
      {Object.entries(items).map(([title, info]) => (
        <div className="music-items" key={title}>
          <header className="header-top">
            <h1>
              <a href="#">{title.replace(/_/g, " ")}</a>
            </h1>

            <span>
              <a href="">Show all</a>
            </span>
          </header>
          <ul className="items">
            {info.map((item, index) => {
              return (
                <Card
                  typePage="home"
                  title={title}
                  key={index}
                  musicName={item.musicName}
                  name={item.name}
                  artist={item.artist}
                  image_url={item.image_url}
                  type={item.type}
                />
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default HomeCard;
