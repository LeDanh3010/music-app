import "../scss/layouts/Footer.scss";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { RiRepeatFill } from "react-icons/ri";
import { TiArrowShuffle } from "react-icons/ti";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { useEffect, useRef } from "react";

const Footer = ({ identify }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    console.log(input);

    // Function to set the background size
    const setBackgroundSize = (input) => {
      input.style.setProperty(
        "--background-size",
        `${getBackgroundSize(input)}%`
      );
    };

    const getBackgroundSize = (input) => {
      const min = +input.min || 0;
      const max = +input.max || 100;
      const value = +input.value;
      return ((value - min) / (max - min)) * 100;
    };

    // Initial setting of background size
    setBackgroundSize(input);

    // Update background size on input event
    input.addEventListener("input", () => setBackgroundSize(input));

    // Cleanup event listener on unmount
    return () => {
      input.removeEventListener("input", () => setBackgroundSize(input));
    };
  }, []);

  return (
    <>
      {identify ? (
        <footer className="footer-controls">
          <div className="footer-music">
            <img
              className="footer-music-img"
              src="https://via.placeholder.com/56"
              alt="image"
            />
            <div className="footer-info">
              <h3>Song Name</h3>
              <p>Artist Name</p>
            </div>
          </div>
          <div className="footer-control">
            <div className="footer-btn">
              <span className="btn">
                <TiArrowShuffle />
              </span>
              <span className="btn">
                <IoPlaySkipBackSharp />
              </span>
              <span className="btn play">
                <FaPlayCircle />
              </span>
              <span className="btn">
                <IoPlaySkipForwardSharp />
              </span>
              <span className="btn ">
                <RiRepeatFill />
              </span>
            </div>
            <div className="footer-progress">
              <input
                type="range"
                className="progress-bar"
                min="0"
                max="100"
                defaultValue="0"
                ref={inputRef}
              />
            </div>
          </div>
          <div className="footer-volume">
            <input type="range" />
          </div>
        </footer>
      ) : (
        <footer className="footer-wrapper">
          <div className="footer-text">
            <span>Preview of Spotify</span>
            <p>
              Sign up to get unlimited songs and podcasts with occasional ads.
              No credit card needed.
            </p>
          </div>
          <button className="footer-signUp">
            <a href="#">Sign up free</a>
          </button>
        </footer>
      )}
    </>
  );
};

export default Footer;
