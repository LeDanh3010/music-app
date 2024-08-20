import { FaSpotify } from "react-icons/fa";
import "../scss/pages/PasswordReset.scss";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import FooterPrivacyPolicy from "../components/FooterPrivacyPolicy";
import Button from "../components/Button";

const PasswordReset = () => {
  return (
    <div className="password-reset-main">
      <div className="password-reset-container">
        <header className="password-reset-header">
          <Link to="/">
            <FaSpotify className="password-reset-brand" />
          </Link>
          <span>Spotify</span>
        </header>
        <main className="password-reset-content">
          <div className="content-wrapper">
            <h3 className="content-header">Reset your Password</h3>
            <p className="content-des">
              Enter the email address or username linked to your Spotify account
              and we&apos;ll send you an email.
            </p>
            <form className="password-reset-form">
              <Input label="Email address or username" />
              <div className="password-reset-support">
                <Link to="/password-reset">Need support?</Link>
              </div>
              <Button content="Send link" />
            </form>
          </div>
        </main>
        <footer className="password-reset-footer">
          <FooterPrivacyPolicy />
        </footer>
      </div>
    </div>
  );
};

export default PasswordReset;
