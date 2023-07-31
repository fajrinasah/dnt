import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputEmail from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputEmail";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";

import "./styles.css";

export default function FormAddCashier({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  emailTouched,
  usernameTouched,
  emailErrors,
  usernameErrors,
  emailValue,
  usernameValue,
  cancelHandler = () => {},
  buttonCancelDisabled = () => {},
  buttonSubmitDisabled = () => {},
}) {
  return (
    <form onSubmit={onSubmit} className="form add-cashier d-flex-col">
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

      {usernameTouched && usernameErrors && (
        <div className="error-container username d-flex-row">
          <ModalDefaultText
            content={usernameErrors}
            color="contrast"
            bgColor="main"
          />
        </div>
      )}

      <div className="disclaimer">
        <p>
          Username cannot be changed later. Please make sure that cashier’s
          username was created based on cashier’s real name
        </p>
      </div>

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

      {emailTouched && emailErrors && (
        <div className="error-container email d-flex-row">
          <ModalDefaultText
            content={emailErrors}
            color="contrast"
            bgColor="main"
          />
        </div>
      )}

      <div className="disclaimer">
        <p>
          Information about account verification and activation will be sent to
          new cashier’s email address
        </p>
      </div>

      <div className="input-submit-container d-flex-col">
        <InputSubmit
          value="Save"
          disabled={buttonSubmitDisabled}
          story="raised-main"
          width="full"
        />

        <ButtonStandard
          story="flat"
          bold=""
          width="full"
          content="Cancel"
          onClick={cancelHandler}
          disabled={buttonCancelDisabled}
        />
      </div>
    </form>
  );
}
