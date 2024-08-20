import "../scss/pages/Login.scss";
import { FaSpotify } from "react-icons/fa";
import SocialLink from "../components/Social_link";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import FooterPrivacyPolicy from "../components/FooterPrivacyPolicy";
import Button from "../components/Button";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="login-wrapper">
      <div className="login-content">
        <div className="login-body">
          <div className="login-brand">
            <Link to="/">
              <FaSpotify />
            </Link>
          </div>
          <h1>Login in to Spotify</h1>
          <div className="login-social-wrapper">
            <div className="login-social">
              <SocialLink />
            </div>
          </div>
          <hr className="divider-line" />
          <form className="login-form">
            <Input
              label="Email or username"
              id="Email"
              type="email"
              placeholder="Email or username"
            />
            <Input
              label="Password"
              id="Password"
              type={!passwordVisible ? "password" : "text"}
              placeholder="Password"
              onPasswordToggle={handlePasswordToggle}
            />
            <div className="remember-me-container">
              <label className="slider-container">
                <input id="rememberMe" type="checkbox" />
                <span className="slider"></span>
              </label>
              <label className="rememberMe-text" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <Button content="Login" />
            <div className="login-forgot-password">
              <Link to="/password-reset">Forgot your Password?</Link>
            </div>
          </form>
          <hr className="divider-line" />
          <p className="login-bottom">
            <span>Don&apos;t have an account?</span>{" "}
            <Link to="/signup">Sign Up Here</Link>
          </p>
        </div>
      </div>
      <footer className="login-footer">
        <FooterPrivacyPolicy />
      </footer>
    </div>
  );
};

export default Login;
