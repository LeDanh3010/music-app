import "../scss/components/Input.scss";
import PropTypes from "prop-types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = (props) => {
  const { label, type, placeholder, id, onPasswordToggle, value, name } = props;

  return (
    <>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <div className="input-container">
        <input
          name={name}
          value={value}
          id={id}
          type={type}
          className={id === "Email" ? "form-input email" : "form-input"}
          placeholder={placeholder}
          required
        />
        {id === "Password" ? (
          <span className="password-toggle" onClick={onPasswordToggle}>
            {type === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onPasswordToggle: PropTypes.func,
};

export default Input;
