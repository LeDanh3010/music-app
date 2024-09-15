import { RiPlayMiniFill } from "react-icons/ri";
import PropTypes from "prop-types";
import "../scss/components/Card.scss";

const Card = ({
  typePage,
  title,
  key,
  name,
  musicName,
  artist,
  image_url,
  type,
  titleName,
}) => {
  return (
    <li key={key}>
      <a href="#" className="items-wrapper">
        <div className="img-wrapper">
          <img
            className={
              title === "Popular_Artists"
                ? "items-img items-img_circle"
                : "items-img items-img_square"
            }
            src={image_url}
            alt="music-img"
          />
          {typePage !== "search" && (
            <span className="play-icon">
              <RiPlayMiniFill className="icon-custom" />
            </span>
          )}
        </div>
        <div className="items-info">
          {typePage !== "search" ? (
            <h3>
              {title === "Popular_Artists" || title === "Popular_Radio"
                ? name
                : musicName}
            </h3>
          ) : (
            <h3>{titleName}</h3>
          )}

          {typePage !== "search" && (
            <span>
              {title === "Popular_Artists" || title === "Popular_Radio"
                ? type
                : artist}
            </span>
          )}
        </div>
      </a>
    </li>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  key: PropTypes.string,
  name: PropTypes.string,
  musicName: PropTypes.string,
  artist: PropTypes.string,
  image_url: PropTypes.string,
  type: PropTypes.string,
  typePage: PropTypes.string,
  titleName: PropTypes.string,
};
export default Card;