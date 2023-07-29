import "../styles.css";
import "./styles.css";

import ButtonHelp from "../../../buttons/ButtonHelp";
import ModalHelp from "../../../texts/ModalHelp";
import CheckboxShowPassword from "../CheckboxShowPassword";

export default function InputPassword({
  flexDirection = "row",
  color = "accent",
  inputId = "",
  labelText = "",
  helpClicked,
  showClicked,
  required = true,
  inputName = "",
  // inputPlaceholder = "",
  minLength = "",
  maxLength = "",
  pattern = "",
  title = "",
  value,
  onChange,
  onBlur,
}) {
  const passwordGuides = [
    <ul>
      <li>Password must be 6-20 characters</li>
      <li>Password must contain at least 1 letter</li>
      <li>Password must contain at least 1 uppercase letter</li>
      <li>Password must contain at least 1 symbol</li>
      <li>Symbols that can be used are @$!%*?&</li>
    </ul>,
  ];

  return (
    <div
      className={`input-password label-and-input d-flex-${flexDirection} ${color}`}
    >
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <div className="guides-container">
        <ModalHelp ulContent={passwordGuides} />
        <ButtonHelp detail="See guides" onClick={helpClicked} />
      </div>
      <input
        className="input-for-label"
        type="password"
        required={required}
        id={inputId}
        name={inputName}
        // placeholder={inputPlaceholder}
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
