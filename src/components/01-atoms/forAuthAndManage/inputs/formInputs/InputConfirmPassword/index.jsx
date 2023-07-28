import "../styles.css";
import "./styles.css";

import CheckboxShowPassword from "../CheckboxShowPassword";

export default function InputConfirmPassword({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  showClicked,
  required = true,
  inputName = "",
  inputPlaceholder = "",
  minLength = "",
  maxLength = "",
  pattern = "",
  title = "",
  value,
  onChange,
  onBlur,
}) {
  return (
    <div
      className={`input-confirm-password label-and-input d-flex-${flexDirection}`}
    >
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="password"
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        title={title}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <CheckboxShowPassword showClicked={showClicked} />
    </div>
  );
}
