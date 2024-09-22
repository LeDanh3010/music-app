import "../scss/components/Input.scss";
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
    userNotExisted,
    handleOnBlur,
    handleKeyDown,
    validRequirement,
    typePass,
  } = props;

  const inputClassName = `${
    id === "Email" ||
    id === "Username" ||
    id === "BirthDate" ||
    id === "EmailOrUserName"
      ? "form-input textInvalid-space"
      : "form-input"
  } ${
    validate?.[`is${id}`] === false ||
    (!userNotExisted &&
      id !== "BirthDate" &&
      id !== "EmailOrUserName" &&
      !typePass)
      ? "form-invalid"
      : ""
  } ${
    id === "Password" &&
    !typePass &&
    (!validRequirement?.isLength ||
      !validRequirement?.isNumberOrSpecialChar ||
      !validRequirement?.isLength)
      ? "form-invalid"
      : ""
  }`;
  const renderError = (fieldId) => {
    if (
      validate?.[`is${fieldId}`] === false &&
      id !== "EmailOrUserName" &&
      !typePass
    ) {
      return (
        <span className="validInput">
          <MdErrorOutline />
          {name} is invalid. Please fill the field valid
        </span>
      );
    } else if (
      !userNotExisted &&
      id !== "BirthDate" &&
      id !== "Password" &&
      id !== "EmailOrUserName"
    ) {
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

export default Input;
