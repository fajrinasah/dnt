import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

export default function FormVerifyOtp({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  otpValue,
}) {
  return (
    <form onSubmit={onSubmit} className="form verify d-flex-col">
      <InputText
        flexDirection="column"
        color="accent"
        inputId="token"
        labelText="OTP token"
        required={true}
        inputName="token"
        inputPlaceholder="enter OTP token here"
        value={otpValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <InputSubmit value="Verify" disabled={isSubmitting} width="auto" />
    </form>
  );
}
