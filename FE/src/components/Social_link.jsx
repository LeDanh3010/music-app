import "../scss/components/Social_link.scss";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="social-wrapper">
      <a href="#" className="btn-social btn-google">
        <FcGoogle className="social-icon" />
        <span className="social-text">Sign up with Google</span>
      </a>
      <a href="#" className="btn-social btn-facebook">
        <SiFacebook className="social-icon" />
        <span className="social-text">Sign up with Facebook</span>
      </a>
      <a href="#" className="btn-social btn-apple">
        <FaApple className="social-icon" />
        <span className="social-text">Sign up with Apple</span>
      </a>
    </div>
  );
};

export default SocialLink;
