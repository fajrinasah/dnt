import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";

import "./styles.css";

export default function FormVerifyOtp({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  otpTouched,
  otpErrors,
  otpValue,
}) {
  return (
    <form onSubmit={onSubmit} className="form verify d-flex-col">
      <InputText
        flexDirection="row"
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

      {otpTouched && otpErrors && (
        <div className="error-container otp d-flex-row">
          <ModalDefaultText
            content={otpErrors}
            color="contrast"
            bgColor="accent"
          />
        </div>
      )}

      <InputSubmit value="Verify" disabled={isSubmitting} width="auto" />
    </form>
  );
}
