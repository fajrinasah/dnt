import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputPassword from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputPassword";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

import "./styles.css";

export default function FormLogin({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  helpClicked = () => {},
  showClicked = () => {},
  touched,
  errors,
  dataValue,
  passwordValue,
  passwordIsShown,
}) {
  return (
    <form onSubmit={onSubmit} className="form login d-flex-col">
      <InputText
        flexDirection="column"
        color="accent"
        inputId="data"
        labelText="Username/email"
        required={true}
        inputName="data"
        inputPlaceholder="enter your username or email here"
        value={dataValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {/* {touched.data && errors.data && (
        // show toast
        
      )} */}

      <InputPassword
        flexDirection="column"
        color="accent"
        inputId="password"
        inputName="password"
        labelText="Password"
        helpClicked={helpClicked}
        showClicked={showClicked}
        required={true}
        passwordIsShown={passwordIsShown}
        value={passwordValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {/* {touched.password && errors.password && (
        // show toast
      )} */}

      <div className="input-submit-container d-flex-row">
        <InputSubmit value="Login" disabled={isSubmitting} width="auto" />
      </div>
    </form>
  );
}
