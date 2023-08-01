import "../styles.css";
import "./styles.css";

import CheckboxShowPassword from "../CheckboxShowPassword";

export default function InputConfirmPassword({
  flexDirection = "row",
  color = "accent",
  inputId = "",
  labelText = "",
  showClicked,
  passwordIsShown,
  required = true,
  inputName = "",
  inputPlaceholder = "",
  title = "",
  value,
  onChange,
  onBlur,
}) {
  return (
    <div
      className={`input-confirm-password label-and-input d-flex-${flexDirection} ${color}`}
    >
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type={passwordIsShown ? "text" : "password"}
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        title={title}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <CheckboxShowPassword showClicked={showClicked} />
    </div>
  );
}
