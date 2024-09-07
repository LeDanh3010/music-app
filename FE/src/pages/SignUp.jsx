import { FaSpotify } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "../scss/pages/Signup.scss";
import SocialLink from "../components/Social_link.jsx";
import Input from "../components/Input.jsx";
import { Link } from "react-router-dom";
import FooterPrivacyPolicy from "../components/FooterPrivacyPolicy.jsx";
import { motion } from "framer-motion";
import Button from "../components/Button.jsx";
import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const letter = /[a-zA-Z]/;
const numberOrSpecialChar = /[0-9!@#$%^&*]/;

const SignUp = () => {
  const defaultUserData = {
    Email: "",
    Password: "",
    Username: "",
    BirthDate: "",
    Gender: "",
  };
  const defaultIsValid = {
    isEmail: true,
    isPassword: true,
    isUserName: true,
    isBirthDate: true,
    isGender: true,
  };
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(0);
  const progress = (currentStep / totalSteps) * 100;
  const [userData, setUserData] = useState(defaultUserData);
  const [validate, setValidate] = useState(defaultIsValid);
  const [passwordVisible, setPasswordVisible] = useState(false);
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
    const newValidate = { ...validate };
    if (typeof value === "string" && !value.trim()) {
      newValidate["is" + fieldName] = false;
      isValid = false;
    } else if (fieldName === "Email" && !emailRegex.test(value)) {
      newValidate["is" + fieldName] = false;
      isValid = false;
    } else {
      newValidate["is" + fieldName] = true;
    }
    setValidate(newValidate);
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
    if (name === "Email") {
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
  const handleOnBlur = (e) => {
    const { name, value } = e.target;
    validatePasswordToText(value);
    validateField(name, value);
  };

  const handleOnClick = (nameBtn, value) => {
    switch (nameBtn) {
      case "Email": {
        const isValid = validateField("Email", userData.Email);
        if (isValid) {
          setCurrentStep(currentStep + 1);
        }
        break;
      }
      case "Password": {
        validatePasswordToText(value);
        if (
          requirements.letter &&
          requirements.numberOrSpecialChar &&
          requirements.length
        ) {
          setCurrentStep(currentStep + 1);
        }
      }
    }
  };
  const handleKeyDown = (e) => {
    const { name, value } = e.target;
    if (e.key === "Enter") {
      handleOnClick(name, value);
    }
  };

  const turnBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="signup">
      <div className="signup-wrapper">
        {currentStep === 0 && (
          <>
            <header>
              <Link to="/">
                <FaSpotify />
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
                    validateField={validate}
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
                  <SocialLink />
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
                <FaSpotify />
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
                      type={!passwordVisible ? "password" : "text"}
                      onPasswordToggle={handlePasswordToggle}
                      handleOnchange={handleOnchange}
                      handleOnBlur={handleOnBlur}
                      handleKeyDown={handleKeyDown}
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
                <FaSpotify />
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
                    <Input id="username" label="Username" type="text" />
                  </div>
                  <div className="date-birth">
                    <Input id="dateOfBirth" label="Date of birth" type="date" />
                  </div>
                </div>
                <Button content="Next" />
              </div>
            </section>
          </>
        )}
        {currentStep === 3 && (
          <>
            <header>
              <Link to="/">
                <FaSpotify />
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
                    <input type="checkbox" id="agree1" />
                    <label htmlFor="agree1">
                      I would prefer not to receive marketing messages from
                      Spotify
                    </label>
                  </div>
                  <div className="term-condition">
                    <input type="checkbox" id="agree2" />
                    <label htmlFor="agree2">
                      Share my registration data with Spotify&apos;s content
                      providers for marketing purposes.
                    </label>
                  </div>
                  <div className="term-condition">
                    <input type="checkbox" id="agree3" />
                    <label htmlFor="agree3">
                      I agree to the Spotify Terms and Conditions of Use.
                    </label>
                  </div>
                </div>
                <Button content="Sign Up" />
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
