import { IoLogoInstagram } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { BiLogoFacebookCircle } from "react-icons/bi";
import "../scss/components/FooterScrollPage.scss";

const FooterScrollPage = () => {
  return (
    <div className="footer-page">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-company">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">For the Record</a>
              </li>
            </ul>
          </div>
          <div className="footer-Communities">
            <h5>Communities</h5>
            <ul>
              <li>
                <a href="#">For artists</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Vendors</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h5>Useful links</h5>
            <ul>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Free Mobile App</a>
              </li>
            </ul>
          </div>
          <div className="spotify-plans">
            <h5>Spotify Plans</h5>
            <ul>
              <li>
                <a href="#">Premium Individual</a>
              </li>
              <li>
                <a href="#">Premium Duo</a>
              </li>
              <li>
                <a href="#">Premium Family</a>
              </li>
              <li>
                <a href="#">Premium Student</a>
              </li>
              <li>
                <a href="#">Spotify free</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <ul>
              <li className="social">
                <a href="#">
                  <IoLogoInstagram />
                </a>
              </li>
              <li className="social">
                <a href="#">
                  <IoLogoTwitter />
                </a>
              </li>
              <li className="social">
                <a href="#">
                  <BiLogoFacebookCircle />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-copyright">
          <p>�2024 Copyright DALE</p>
        </div>
      </div>
    </div>
  );
};

export default FooterScrollPage;
