import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputPassword from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputPassword";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";

import "./styles.css";

export default function FormLogin({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  helpClicked = () => {},
  showClicked = () => {},
  dataTouched,
  passwordTouched,
  dataErrors,
  passwordErrors,
  dataValue,
  passwordValue,
  guidesIsShown,
  passwordIsShown,
}) {
  return (
    <form onSubmit={onSubmit} className="form login d-flex-col">
      <InputText
        flexDirection="col"
        color="accent"
        inputId="data"
        labelText="Username/email"
        required={false}
        inputName="data"
        inputPlaceholder="enter your username or email here"
        value={dataValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {dataTouched && dataErrors && (
        <div className="error-container data d-flex-row">
          <ModalDefaultText
            content={dataErrors}
            color="main"
            bgColor="accent"
          />
        </div>
      )}

      <InputPassword
        flexDirection="column"
        color="accent"
        inputId="password"
        inputName="password"
        labelText="Password"
        helpClicked={helpClicked}
        showClicked={showClicked}
        required={false}
        guidesIsShown={guidesIsShown}
        passwordIsShown={passwordIsShown}
        value={passwordValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {passwordTouched && passwordErrors && (
        <div className="error-container password d-flex-row">
          <ModalDefaultText
            content={passwordErrors}
            color="main"
            bgColor="accent"
          />
        </div>
      )}

      <div className="input-submit-container d-flex-row">
        <InputSubmit value="Login" disabled={isSubmitting} width="auto" />
      </div>
    </form>
  );
}
