import { FaSpotify } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import "../scss/pages/Signup.scss";
import SocialLink from "../components/Social_link.jsx";
import Input from "../components/Input.jsx";
import { Link } from "react-router-dom";
import FooterPrivacyPolicy from "../components/FooterPrivacyPolicy.jsx";

import Button from "../components/Button.jsx";
import { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const SignUp = () => {
  const [date, setDate] = useState("Select Date");
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    birthDate: "",
    gender: "",
  });
  const [requirements, setRequireMents] = useState({
    letter: false,
    numberOrSpecialChar: false,
    length: false,
  });

  const validatePassword = (value) => {
    const letter = /[a-zA-Z]/.test(value);
    const numberOrSpecialChar = /[0-9!@#$%^&*]/.test(value);
    const length = value.length >= 10;
    setRequireMents({
      letter,
      numberOrSpecialChar,
      length,
    });
  };
  const nextStep = () => {
    if (
      requirements.letter &&
      requirements.numberOrSpecialChar &&
      requirements.length
    ) {
      setStep(step + 1);
    } else {
      alert("Please fulfill all password requirements");
    }
  };
  const turnBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };
  return (
    <div className="signup">
      <div className="signup-wrapper">
        {step === 0 && (
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
                    id="Email"
                    label="Email"
                    type="email"
                    placeholder="name@domain.com"
                  />
                  <Button content="Next" />
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
        {step === 1 && (
          <>
            <header>
              <Link to="/">
                <FaSpotify />
              </Link>
            </header>

            <section>
              <div className="signup-body">
                <div className="progress-bar-wrapper">
                  <div className="progress-bar"></div>
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
                    <Input id="Password" label="Password" type="password" />
                  </div>
                  <div className="sign-form-requirement">
                    <span className="requirement-header">
                      Your password must contain at least
                    </span>
                    <ul className="requirement-text">
                      <li>
                        <FaRegCircle />1 letter
                      </li>
                      <li>
                        <FaRegCircle />1 number or special character (example: #
                        ? ! &)
                      </li>
                      <li>
                        <FaRegCircle />
                        10 characters
                      </li>
                    </ul>
                  </div>
                </div>
                <Button content="Next" />
              </div>
            </section>
          </>
        )}
        {step === 2 && (
          <>
            <header>
              <Link to="/">
                <FaSpotify />
              </Link>
            </header>

            <section>
              <div className="signup-body">
                <div className="progress-bar-wrapper">
                  <div className="progress-bar"></div>
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
        {step === 3 && (
          <>
            <header>
              <Link to="/">
                <FaSpotify />
              </Link>
            </header>

            <section>
              <div className="signup-body">
                <div className="progress-bar-wrapper">
                  <div className="progress-bar"></div>
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
