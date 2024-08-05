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
            <h1>Sign up to start learning</h1>
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
              <button type="submit">Next</button>
            </form>
            <div className="signup-social">
              <hr />
              <button className="google">
                <FcGoogle />
                <span>Sign up with Google</span>
              </button>
              <button className="facebook">
                <SiFacebook />
                <span>Sign up with Facebook</span>
              </button>
              <button className="apple">
                <FaApple />
                <span>Sign up with Apple</span>
              </button>
              <hr />
              <p>
                Already have an account? <a href="/login">Login</a>
              </p>
            </div>
          </div>
        </section>
        <footer>
          <p>
            This site is protected by reCAPTCHA and the Google
            <a href="#">Privacy Policy</a> and
            <a href="#">Terms of Service</a> apply.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
