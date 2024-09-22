import "../scss/components/Social_link.scss";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa";

const SocialLink = ({ letter }) => {
  return (
    <div className="social-wrapper">
      <a href="#" className="btn-social btn-google">
        <FcGoogle className="social-icon" />
        <span className="social-text">{letter} with Google</span>
      </a>
      <a href="#" className="btn-social btn-facebook">
        <SiFacebook className="social-icon" />
        <span className="social-text">{letter} with Facebook</span>
      </a>
      <a href="#" className="btn-social btn-apple">
        <FaApple className="social-icon" />
        <span className="social-text">{letter} with Apple</span>
      </a>
    </div>
  );
};

export default SocialLink;
