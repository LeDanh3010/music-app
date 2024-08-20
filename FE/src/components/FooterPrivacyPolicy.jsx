import { Link } from "react-router-dom";
import "../scss/components/FooterPrivacyPolicy.scss";

const FooterPrivacyPolicy = () => {
  return (
    <p className="footer-privacy">
      This site is protected by reCAPTCHA and the Google{" "}
      <Link target="_blank" to="https://policies.google.com/privacy">
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link target="_blank" to="https://policies.google.com/terms">
        Terms of Service
      </Link>{" "}
      apply.
    </p>
  );
};

export default FooterPrivacyPolicy;
