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

export default Button;
