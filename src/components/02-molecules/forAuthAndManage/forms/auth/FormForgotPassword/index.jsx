import InputEmail from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputEmail";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

export default function FormForgotPassword({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  emailValue,
}) {
  return (
    <form onSubmit={onSubmit} className="form forgot d-flex-col">
      <InputEmail
        flexDirection="column"
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

      <InputSubmit
        value="Send OTP token to email"
        disabled={isSubmitting}
        width="auto"
      />
    </form>
  );
}
