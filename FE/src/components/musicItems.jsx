import "./musicItems.scss";
import "overlayscrollbars/styles/overlayscrollbars.css";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import { RiPlayMiniFill } from "react-icons/ri";
const MusicItem = () => {
  const items = {
    Popular_Artists: [
      {
        name: "Mrs. GREEN APPLE",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
      {
        name: "back number",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
      {
        name: "Vaundy",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
      {
        name: "Yorushika",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
      {
        name: "YOASOBI",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
      // {
      //   id: 7,
      //   name: "Aimyon",
      //   type: "Artist",
      //   image_url: "https://via.placeholder.com/150",
      // },
      // {
      //   id: 8,
      //   name: "Kenshi Yonezu",
      //   type: "Artist",
      //   image_url: "https://via.placeholder.com/150",
      // },
      // {
      //   id: 10,
      //   name: "Creepy Nuts",
      //   type: "Artist",
      //   image_url: "https://via.placeholder.com/150",
      // },
    ],
    Popular_Albums: [
      {
        musicName: "ANTENNA",
        artist: "Mrs. GREEN APPLE",
        image_url: "https://via.placeholder.com/150",
      },
      {
        musicName: "No.0 ~ring~",
        artist: "Number_j",
        image_url: "https://via.placeholder.com/150",
      },
      {
        musicName: "strobo",
        artist: "Vaundy",
        image_url: "https://via.placeholder.com/150",
      },
      {
        musicName: "Happy Ending",
        artist: "Yorushika",
        image_url: "https://via.placeholder.com/150",
      },
      {
        musicName: "SUPER REAL ME",
        artist: "ILLIT",
        image_url: "https://via.placeholder.com/150",
      },
      // {
      //   id: 18,
      //   musicName: "I wonder",
      //   artist: "Da-iCE",
      //   image_url: "https://via.placeholder.com/150",
      // },
      // {
      //   id: 20,
      //   musicName: "ユーモア",
      //   artist: "back number",
      //   image_url: "https://via.placeholder.com/150",
      // },
      // {
      //   id: 11,
      //   musicName: "Bling-Bang-Bang-Born",
      //   artist: "Creepy Nuts",
      //   image_url: "https://via.placeholder.com/150",
      // },
    ],
    Popular_Radio: [
      {
        name: "Mrs. GREEN APPLE",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
      {
        name: "back number",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
      {
        name: "Vaundy",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
      {
        name: "Yorushika",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
      {
        name: "YOASOBI",
        type: "Artist",
        image_url: "https://via.placeholder.com/150",
      },
    ],
  };

  return (
    <OverlayScrollbarsComponent
      className="content-container"
      options={{ scrollbars: { autoHide: "scroll" } }}
    >
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
                <>
                  <li key={index}>
                    <a href="#">
                      <img
                        className={
                          title === "Popular_Artists"
                            ? "items-img items-img_circle"
                            : "items-img items-img_square"
                        }
                        src={item.image_url}
                        alt="music-img"
                      />
                      <div className="items-info">
                        <h3>
                          {title === "Popular_Artists" ||
                          title === "Popular_Radio"
                            ? item.name
                            : item.musicName}
                        </h3>
                        <span>
                          {title === "Popular_Artists" ||
                          title === "Popular_Radio"
                            ? item.type
                            : item.artist}
                        </span>
                      </div>
                    </a>
                    <a className="play-icon" href="#">
                      <RiPlayMiniFill className="icon-custom" />
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      ))}
    </OverlayScrollbarsComponent>
  );
};

export default MusicItem;
