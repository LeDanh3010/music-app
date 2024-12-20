import "../scss/pages/Login.scss";
import SocialLink from "../components/Social_link";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import FooterPrivacyPolicy from "../components/FooterPrivacyPolicy";
import Button from "../components/Button";
import logo from "../assets/spotify-icon.svg";
import { MdErrorOutline } from "react-icons/md";
import { useUserService } from "../services/userService";
import { AuthContext } from "../components/AuthContext";

const Login = () => {
  const userService = useUserService();
  const { setAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    EmailOrUserName: "",
    Password: "",
  });
  const [validate, setValidate] = useState({
    isEmailOrUserName: true,
    isPassword: true,
  });

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateField = (fieldName, value) => {
    let isValue = true;
    if (typeof value === "string" && !value.trim()) {
      setValidate((prev) => ({
        ...prev,
        ["is" + fieldName]: false,
      }));
      isValue = false;
    } else {
      setValidate((prev) => ({
        ...prev,
        ["is" + fieldName]: true,
      }));
    }
    return isValue;
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setLoginData(() => {
      const newState = { ...loginData };
      newState[name] = value;
      validateField(name, value);
      return newState;
    });
  };

  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateSubmit = () => {
    const newValidate = { ...validate };
    let isValue = true;
    for (let [key, value] of Object.entries(loginData)) {
      if (typeof value === "string" && !value.trim()) {
        newValidate[`is${key}`] = false;
        isValue = false;
      } else if (key === "Password" && value.length < 10) {
        newValidate[`is${key}`] = false;
        isValue = false;
      } else {
        newValidate[`is${key}`] = true;
        isValue = true;
      }
    }
    setValidate(newValidate);
    return isValue;
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    const isValidSubmit = validateSubmit();
    const res = await userService.login({
      emailOrUserName: loginData.EmailOrUserName,
      password: loginData.Password,
    });
    if (isValidSubmit && Number(res?.DE) === 1) {
      setAccessToken(res.DT.access_token);
      setError(false);
      navigate("/user/home");
    } else {
      console.log("error");
      setError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick;
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-content">
        <div className="login-body">
          <div className="login-brand">
            <Link to="/">
              <img src={logo} alt="Spotify Logo" />
            </Link>
          </div>
          <h1>Login in to Spotify</h1>

          <div className="login-social-wrapper">
            <div className="login-social">
              <SocialLink letter="Continue" />
            </div>
          </div>
          <hr className="divider-line" />
          {error && (
            <div className="showErr">
              <MdErrorOutline className="showErr-icon" />
              <span>Incorrect username or password</span>
            </div>
          )}
          <form className="login-form">
            <Input
              name="EmailOrUserName"
              value={loginData.EmailOrUserName}
              handleOnchange={handleOnchange}
              handleOnBlur={handleOnBlur}
              handleKeyDown={handleKeyDown}
              validate={validate}
              label="Email or username"
              id="EmailOrUserName"
              type="text"
              placeholder="Email or username"
            />
            <Input
              typePass="loginPass"
              label="Password"
              id="Password"
              name="Password"
              handleOnchange={handleOnchange}
              handleOnBlur={handleOnBlur}
              handleKeyDown={handleKeyDown}
              value={loginData.Password}
              validate={validate}
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
            <Button
              typeBtn="login"
              content="Login"
              handleOnClick={handleOnClick}
            />
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
