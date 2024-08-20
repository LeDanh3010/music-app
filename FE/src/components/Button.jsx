import PropTypes from "prop-types";
import "../scss/components/Button.scss";

const Button = ({ content }) => {
  return (
    <button className="btn-submit" type="submit">
      {content}
    </button>
  );
};
Button.prototypes = {
  content: PropTypes.string.isRequired,
};

export default Button;
