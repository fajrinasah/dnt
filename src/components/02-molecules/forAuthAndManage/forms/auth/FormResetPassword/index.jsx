import InputPassword from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputPassword";
import InputConfirmPassword from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputConfirmPassword";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";

import "./styles.css";

export default function FormResetPassword({
  type = "rpw", // "rpw" context for reset pw, "act" context for save pw for the first time
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  helpClicked = () => {},
  showClicked = () => {},
  confirmShowClicked = () => {},
  passwordTouched,
  confirmPasswordTouched,
  passwordErrors,
  confirmPasswordErrors,
  passwordValue,
  confirmPasswordValue,
  guidesIsShown,
  passwordIsShown,
  confirmPasswordIsShown,
}) {
  return (
    <form onSubmit={onSubmit} className="form reset-password d-flex-col">
      <InputPassword
        flexDirection="column"
        color="accent"
        inputId="password"
        labelText="Password"
        helpClicked={helpClicked}
        showClicked={showClicked}
        required={true}
        guidesIsShown={guidesIsShown}
        passwordIsShown={passwordIsShown}
        inputName="password"
        value={passwordValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {passwordTouched && passwordErrors && (
        <div className="error-container password d-flex-row">
          <ModalDefaultText
            content={passwordErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputConfirmPassword
        flexDirection="column"
        color="accent"
        inputId="confirmPassword"
        labelText="Confirm password"
        showClicked={confirmShowClicked}
        passwordIsShown={confirmPasswordIsShown}
        required={true}
        inputName="confirmPassword"
        value={confirmPasswordValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {confirmPasswordTouched && confirmPasswordErrors && (
        <div className="error-container confirm-password d-flex-row">
          <ModalDefaultText
            content={confirmPasswordErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <div className="input-submit-container d-flex-row">
        <InputSubmit
          value={type === "rpw" ? "Reset password" : "Save password"}
          disabled={isSubmitting}
          width="auto"
        />
      </div>
    </form>
  );
}
