import InputPassword from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputPassword";
import InputConfirmPassword from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputConfirmPassword";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

import "./styles.css";

export default function FormResetPassword({
  type = "reset", // "reset" or "save"
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  helpClicked = () => {},
  showClicked = () => {},
  passwordValue,
  confirmPasswordValue,
}) {
  return (
    <form onSubmit={onSubmit} className="form reset d-flex-col">
      <InputPassword
        flexDirection="column"
        color="accent"
        inputId="password"
        labelText="Password"
        helpClicked={helpClicked}
        showClicked={showClicked}
        required={true}
        inputName="password"
        value={passwordValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <InputConfirmPassword
        flexDirection="column"
        color="accent"
        inputId="confirmPassword"
        labelText="Confirm password"
        showClicked={showClicked}
        required={true}
        inputName="confirmPassword"
        value={confirmPasswordValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <div className="input-submit-container d-flex-row">
        <InputSubmit
          value={type === "reset" ? "Reset password" : "Save password"}
          disabled={isSubmitting}
          width="auto"
        />
      </div>
    </form>
  );
}
