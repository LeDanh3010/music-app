import "../scss/components/Input.scss";
import PropTypes from "prop-types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { MdErrorOutline } from "react-icons/md";

const Input = (props) => {
  const {
    label,
    type,
    placeholder,
    id,
    onPasswordToggle,
    value,
    name,
    handleOnchange,
    validateField,
  } = props;
  const inputClassName = `${
    id === "Email" ? "form-input email" : "form-input"
  } ${!validateField?.isEmail ? "invalid" : ""}`;
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
          className={inputClassName}
          placeholder={placeholder}
          required
          onChange={(e) => handleOnchange(e)}
        />
        {id === "Password" ? (
          <span className="password-toggle" onClick={onPasswordToggle}>
            {type === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        ) : (
          ""
        )}

        {!validateField?.isEmail && (
          <span className="validInput">
            <MdErrorOutline />
            {name} is invalid. Please fill the field valid
          </span>
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
  handleOnchange: PropTypes.func,
  validateField: PropTypes.object,
};

export default Input;
