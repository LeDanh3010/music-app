import PropTypes from "prop-types";
import "../scss/components/Button.scss";

const Button = ({ content, handleOnClick }) => {
  return (
    <button
      className="btn-submit"
      type="submit"
      onClick={() => {
        handleOnClick();
      }}
    >
      {content}
    </button>
  );
};
Button.prototypes = {
  content: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func,
};

export default Button;
