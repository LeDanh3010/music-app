import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-text">
        <span>Preview of Spotify</span>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed
        </p>
      </div>
      <button className="footer-signUp">
        <a href="#">Sign up free</a>
      </button>
    </footer>
  );
};

export default Footer;
