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
    validate,
    userExisted,
    handleOnBlur,
    handleKeyDown,
  } = props;
  const inputClassName = `${
    id === "Email" || id === "Username" || id === "BirthDate"
      ? "form-input textInvalid-space"
      : "form-input"
  }`;
  const renderError = (fieldId) => {
    if (validate?.[`is${fieldId}`] === false) {
      return (
        <span className="validInput">
          <MdErrorOutline />
          {name} is invalid. Please fill the field valid
        </span>
      );
    } else if (userExisted) {
      return (
        <span className="validInput">
          <MdErrorOutline />
          {name} is already existed
        </span>
      );
    }
    return null;
  };
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
          onBlur={(e) => handleOnBlur(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        {id === "Password" ? (
          <span className="password-toggle" onClick={onPasswordToggle}>
            {type === "password" ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        ) : (
          ""
        )}
        {renderError(id)}
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
  validate: PropTypes.object,
  handleOnBlur: PropTypes.func,
  handleKeyDown: PropTypes.func,
  emailExist: PropTypes.bool,
};

export default Input;
