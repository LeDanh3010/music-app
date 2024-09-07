import PropTypes from "prop-types";
import "../scss/components/Button.scss";

const Button = ({ content, handleOnClick, nameBtn }) => {
  return (
    <button
      className="btn-submit"
      type="submit"
      onClick={() => {
        handleOnClick(nameBtn);
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
