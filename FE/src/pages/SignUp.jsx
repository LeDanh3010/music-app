import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import "../scss/pages/Signup.scss";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-wrapper">
        <header>
          <FaSpotify />
        </header>
        <section>
          <div className="signup-body">
            <h1>Sign up to start listening</h1>
            <form className="signup-form">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="name@domain.com"
              />
              <button className="btn-submit" type="submit">
                Next
              </button>
            </form>
            <div className="signup-social">
              <div className="divider-top">or</div>
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
              <hr className="divider-bottom" />
              <p className="signup-bottom">
                <span>Already have an account?</span>{" "}
                <a href="/login">Login in here</a>
              </p>
            </div>
          </div>
        </section>
        <footer className="signup-footer">
          <p>
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>{" "}
            apply.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
