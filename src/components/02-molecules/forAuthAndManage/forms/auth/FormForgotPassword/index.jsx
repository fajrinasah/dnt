import InputEmail from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputEmail";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";

import "./styles.css";

export default function FormForgotPassword({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  emailTouched,
  emailErrors,
  emailValue,
}) {
  return (
    <form onSubmit={onSubmit} className="form forgot-password d-flex-col">
      <InputEmail
        flexDirection="row"
        color="accent"
        inputId="email"
        labelText="Email"
        required={true}
        inputName="email"
        inputPlaceholder="enter your email here"
        value={emailValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {emailTouched && emailErrors && (
        <div className="error-container email d-flex-row">
          <ModalDefaultText
            content={emailErrors}
            color="main"
            bgColor="accent"
          />
        </div>
      )}

      <InputSubmit
        value="Send OTP token to email"
        disabled={isSubmitting}
        width="auto"
      />
    </form>
  );
}
