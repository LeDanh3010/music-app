import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "../scss/pages/Signup.scss";
import SocialLink from "../components/Social_link.jsx";
import Input from "../components/Input.jsx";
import { Link, useNavigate } from "react-router-dom";
import FooterPrivacyPolicy from "../components/FooterPrivacyPolicy.jsx";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { useUserService } from "../services/userService.jsx";
import logo from "../assets/spotify-icon.svg";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const letter = /[a-zA-Z]/;
const numberOrSpecialChar = /[0-9!@#$%^&*]/;

const SignUp = () => {
  const userService = useUserService();
  const navigate = useNavigate();
  const defaultUserData = {
    Email: "",
    Password: "",
    Username: "",
    BirthDate: "",
  };
  const defaultIsValid = {
    isEmail: true,
    isUsername: true,
    isBirthDate: true,
    isPassword: true,
  };
  const totalSteps = 3;
  const [showErr, setShowErr] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const progress = (currentStep / totalSteps) * 100;
  const [userData, setUserData] = useState(defaultUserData);
  const [validate, setValidate] = useState(defaultIsValid);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userNotExisted, setUserNotExisted] = useState(true);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [requirements, setRequireMents] = useState({
    letter: false,
    numberOrSpecialChar: false,
    length: false,
  });
  const [validRequirement, setValidRequirement] = useState({
    isLetter: true,
    isNumberOrSpecialChar: true,
    isLength: true,
  });

  const validateField = (fieldName, value) => {
    let isValid = true;
    if (typeof value === "string" && !value.trim()) {
      setValidate((prev) => ({
        ...prev,
        ["is" + fieldName]: false,
      }));
      isValid = false;
    } else if (fieldName === "Email" && !emailRegex.test(value)) {
      setValidate((prev) => ({
        ...prev,
        ["is" + fieldName]: false,
      }));
      isValid = false;
    } else {
      setValidate((prev) => ({
        ...prev,
        ["is" + fieldName]: true,
      }));
      isValid = true;
    }
    return isValid;
  };
  const validatePasswordToText = (value) => {
    setValidRequirement({
      isLetter: letter.test(value),
      isNumberOrSpecialChar: numberOrSpecialChar.test(value),
      isLength: value.length >= 10,
    });
  };
  const validatePassword = (value) => {
    setRequireMents({
      letter: letter.test(value),
      numberOrSpecialChar: numberOrSpecialChar.test(value),
      length: value.length >= 10,
    });
  };
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    if (name === "Email" || name === "Username") {
      setUserData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setUserData((prev) => {
        const updateState = { ...prev, [name]: value };
        validatePassword(value);
        validatePasswordToText(value);
        return updateState;
      });
    }
  };
  const handleOnBlur = async (e) => {
    const { name, value } = e.target;
    if (name === "Password") {
      validatePasswordToText(value);
    } else {
      validateField(name, value);
      const checkUserExisted = await callApiCheckEmail(value);
      if (Number(checkUserExisted.DE) === 0) {
        setUserNotExisted(true);
      } else {
        setUserNotExisted(false);
      }
    }
  };

  const callApiCheckEmail = (data) => {
    return userService.findUsernameOrEmail({
      emailOrUserName: data,
    });
  };

  const handleOnClick = async (nameBtn) => {
    switch (nameBtn) {
      case "Email": {
        const isValid = validateField("Email", userData.Email);
        if (userData.Email) {
          try {
            const checkEmailExisted = await callApiCheckEmail(userData.Email);
            if (isValid && Number(checkEmailExisted.DE) === 0) {
              setCurrentStep(currentStep + 1);
              setUserNotExisted(true);
            } else {
              setUserNotExisted(false);
            }
          } catch (e) {
            console.error("Error checking email existence: ", e);
            throw new Error("Failed to check if email exists.");
          }
        }
        break;
      }
      case "Password": {
        if (
          requirements.letter &&
          requirements.numberOrSpecialChar &&
          requirements.length
        ) {
          setCurrentStep(currentStep + 1);
        }
        break;
      }

      case "BirthDate":
      case "UserAndBirth": {
        if (userData.Username) {
          try {
            const checkUsernameExisted = await callApiCheckEmail(
              userData.Username
            );
            const isUsernameValid = validateField(
              "Username",
              userData.Username
            );
            const isBirthDateValid = validateField(
              "BirthDate",
              userData.BirthDate
            );
            if (
              isUsernameValid &&
              isBirthDateValid &&
              Number(checkUsernameExisted.DE) === 0
            ) {
              setCurrentStep(currentStep + 1);
              setUserNotExisted(true);
            } else {
              setUserNotExisted(false);
            }
          } catch (e) {
            console.error("Error checking username existence: ", e);
            throw new Error("Failed to check if username exists.");
          }
        }
        break;
      }
      case "SignUp": {
        if (!isChecked) {
          setShowErr(true);
        } else {
          setShowErr(false);
          try {
            const res = await userService.create({
              email: userData.Email,
              username: userData.Username,
              password: userData.Password,
              birthDate: userData.BirthDate,
            });
            if (Number(res?.DE) === 1) {
              navigate("/login");
            }
          } catch (e) {
            console.error("Error signing up: ", e);
            throw new Error("Failed to sign up.");
          }
        }
      }
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleOnClick(e.target.name);
    }
  };

  const turnBack = () => {
    currentStep > 0 && setCurrentStep(currentStep - 1);
  };

  return (
    <div className="signup">
      <div className="signup-wrapper">
        {currentStep === 0 && (
          <>
            <header>
              <Link to="/">
                <img className="logo_size" src={logo} alt="Spotify Logo" />
              </Link>
            </header>
            <section>
              <div className="signup-body">
                <h1>Sign up to start listening</h1>
                <div className="signup-form">
                  <Input
                    name="Email"
                    value={userData.Email}
                    id="Email"
                    label="Email"
                    type="email"
                    placeholder="name@domain.com"
                    handleOnchange={handleOnchange}
                    validate={validate}
                    userNotExisted={userNotExisted}
                    handleOnBlur={handleOnBlur}
                    handleKeyDown={handleKeyDown}
                  />
                  <Button
                    content="Next"
                    nameBtn="Email"
                    handleOnClick={handleOnClick}
                  />
                </div>
                <div className="signup-social">
                  <div className="divider-top">or</div>
                  <SocialLink letter="Sign up" />
                  <hr className="divider-bottom" />
                  <p className="signup-bottom">
                    <span>Already have an account?</span>{" "}
                    <Link to="/login">Login in here</Link>
                  </p>
                </div>
              </div>
            </section>
          </>
        )}
        {currentStep === 1 && (
          <>
            <header>
              <Link to="/">
                <img className="logo_size" src={logo} alt="Spotify Logo" />
              </Link>
            </header>

            <section>
              <div className="signup-body">
                <div className="progress-bar-wrapper">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1, ease: "linear" }}
                  ></motion.div>
                </div>
                <div className="signup-header">
                  <div onClick={() => turnBack()}>
                    <MdOutlineKeyboardArrowLeft className="signup-back-icon" />
                  </div>
                  <div className="signup-text-wrapper">
                    <span>Step 1 of 3</span>
                    <h4>Create a password</h4>
                  </div>
                </div>
                <div className="signup-form-step">
                  <div className="signup-form-password">
                    <Input
                      name="Password"
                      value={userData.Password}
                      id="Password"
                      label="Password"
                      validate={validate}
                      type={!passwordVisible ? "password" : "text"}
                      onPasswordToggle={handlePasswordToggle}
                      handleOnchange={handleOnchange}
                      handleOnBlur={handleOnBlur}
                      handleKeyDown={handleKeyDown}
                      userNotExisted={userNotExisted}
                      validRequirement={validRequirement}
                    />
                  </div>
                  <div className="sign-form-requirement">
                    <span className="requirement-header ">
                      Your password must contain at least
                    </span>
                    <ul className="requirement-text">
                      <li className="validPassword">
                        <span
                          className={requirements.letter ? "dot valid" : "dot"}
                        ></span>
                        <span
                          className={
                            !validRequirement.isLetter
                              ? "validText invalid"
                              : "validText"
                          }
                        >
                          1 letter
                        </span>
                      </li>
                      <li className="validPassword">
                        <span
                          className={
                            requirements.numberOrSpecialChar
                              ? "dot valid"
                              : "dot"
                          }
                        ></span>
                        <span
                          className={
                            !validRequirement.isNumberOrSpecialChar
                              ? "validText invalid"
                              : "validText"
                          }
                        >
                          1 number or special character (example: # ? ! &)
                        </span>
                      </li>
                      <li className="validPassword">
                        <span
                          className={requirements.length ? "dot valid" : "dot"}
                        ></span>
                        <span
                          className={
                            !validRequirement.isLength
                              ? "validText invalid"
                              : "validText"
                          }
                        >
                          10 characters
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Button
                  content="Next"
                  nameBtn="Password"
                  handleOnClick={handleOnClick}
                />
              </div>
            </section>
          </>
        )}

        {currentStep === 2 && (
          <>
            <header>
              <Link to="/">
                <img className="logo_size" src={logo} alt="Spotify Logo" />
              </Link>
            </header>

            <section>
              <div className="signup-body">
                <div className="progress-bar-wrapper">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  ></motion.div>
                </div>
                <div className="signup-header">
                  <div onClick={() => turnBack()}>
                    <MdOutlineKeyboardArrowLeft className="signup-back-icon" />
                  </div>
                  <div className="signup-text-wrapper">
                    <span>Step 2 of 3</span>
                    <h4>Tell us about yourself</h4>
                  </div>
                </div>
                <div className="signup-form-step">
                  <div className="user-name">
                    <Input
                      id="Username"
                      label="Username"
                      type="text"
                      name="Username"
                      value={userData.Username}
                      handleOnchange={handleOnchange}
                      validate={validate}
                      userNotExisted={userNotExisted}
                      handleOnBlur={handleOnBlur}
                      handleKeyDown={handleKeyDown}
                    />
                  </div>
                  <div className="date-birth">
                    <Input
                      value={userData.BirthDate}
                      id="BirthDate"
                      label="BirthDate"
                      type="date"
                      name="BirthDate"
                      userNotExisted={userNotExisted}
                      validate={validate}
                      handleOnBlur={handleOnBlur}
                      handleOnchange={handleOnchange}
                      handleKeyDown={handleKeyDown}
                    />
                  </div>
                </div>
                <Button
                  nameBtn="UserAndBirth"
                  handleOnClick={handleOnClick}
                  content="Next"
                />
              </div>
            </section>
          </>
        )}
        {currentStep === 3 && (
          <>
            <header>
              <Link to="/">
                <img className="logo_size" src={logo} alt="Spotify Logo" />
              </Link>
            </header>

            <section>
              <div className="signup-body">
                <div className="progress-bar-wrapper">
                  <motion.div
                    className="progress-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "linear" }}
                  ></motion.div>
                </div>
                <div className="signup-header">
                  <div onClick={() => turnBack()}>
                    <MdOutlineKeyboardArrowLeft className="signup-back-icon" />
                  </div>
                  <div className="signup-text-wrapper">
                    <span>Step 3 of 3</span>
                    <h4>Terms & Conditions</h4>
                  </div>
                </div>
                <div className="signup-form-step">
                  <div className="term-condition">
                    <label className="condition-text">
                      <input type="checkbox" />
                      <span>
                        I would prefer not to receive marketing messages from
                        Spotify
                      </span>
                    </label>
                  </div>
                  <div className="term-condition">
                    <label className="condition-text">
                      <input className="checkbox-condition" type="checkbox" />
                      <span>
                        Share my registration data with Spotify&apos;s content
                        providers for marketing purposes.
                      </span>
                    </label>
                  </div>
                  <div className="term-condition">
                    <label className="condition-text">
                      <input
                        name="SignUp"
                        className="checkbox-condition"
                        type="checkbox"
                        checked={isChecked}
                        onKeyDown={handleKeyDown}
                        onChange={() => {
                          setChecked(!isChecked);
                        }}
                      />
                      <span>
                        I agree to the Spotify Terms and Conditions of Use.
                      </span>
                    </label>
                    {showErr && (
                      <span className="validInput terms">
                        <MdErrorOutline />
                        Please agree the terms and conditions
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  handleOnClick={handleOnClick}
                  nameBtn="SignUp"
                  content="Sign Up"
                />
              </div>
            </section>
          </>
        )}
        <footer className="signup-footer">
          <FooterPrivacyPolicy />
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
