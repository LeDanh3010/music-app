import "../scss/components/Button.scss";

const Button = ({ content, handleOnClick, nameBtn, typeBtn }) => {
  return (
    <>
      {typeBtn ? (
        <button
          className="btn-submit"
          type="submit"
          onClick={(e) => {
            handleOnClick(e);
          }}
        >
          {content}
        </button>
      ) : (
        <button
          className="btn-submit"
          type="submit"
          onClick={() => {
            handleOnClick(nameBtn);
          }}
        >
          {content}
        </button>
      )}
    </>
  );
};

export default Button;
