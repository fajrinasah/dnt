import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputEmail from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputEmail";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

import "./styles.css";

export default function FormAddCashier({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  emailValue,
  usernameValue,
  cancelHandler = () => {},
}) {
  return (
    <form onSubmit={onSubmit} className="form add-cashier d-flex-col">
      <InputEmail
        flexDirection="row"
        color="main"
        inputId="email"
        labelText="Email"
        required={true}
        inputName="email"
        inputPlaceholder="enter cashier's email here"
        value={emailValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <div className="disclaimer">
        <p>
          Username cannot be changed later. Please make sure that cashier’s
          username was created based on cashier’s real name
        </p>
      </div>

      <InputText
        flexDirection="row"
        color="main"
        inputId="username"
        labelText="Username"
        required={true}
        inputName="username"
        inputPlaceholder="enter cashier's username here"
        value={usernameValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <div className="disclaimer">
        <p>
          Information about account verification and activation will be sent to
          new cashier’s email address
        </p>
      </div>

      <div className="input-submit-container d-flex-row">
        <ButtonStandard
          story="flat"
          bold=""
          width="full"
          content="Cancel"
          onClick={cancelHandler}
        />

        <InputSubmit
          value="Save"
          disabled={isSubmitting}
          story="raised-main"
          width="full"
        />
      </div>
    </form>
  );
}
