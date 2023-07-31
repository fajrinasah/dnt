import InputEmail from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputEmail";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";

import "./styles.css";

export default function FormEditEmailCashier({
  isReadOnly = true,
  currentEmail = "",
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  emailTouched,
  emailErrors,
  emailValue,
  changeHandler = () => {},
  cancelHandler = () => {},
}) {
  return (
    <form onSubmit={onSubmit} className="form edit-email-cashier d-flex-col">
      <InputEmail
        flexDirection="row"
        color="main"
        inputId="email"
        labelText="Email"
        required={true}
        inputName="email"
        defaultValue={currentEmail}
        value={emailValue}
        onBlur={handleBlur}
        onChange={handleChange}
        readOnly={isReadOnly}
      />

      {isReadOnly === false && emailTouched && emailErrors && (
        <div className="error-container edit-cashier-email d-flex-row">
          <ModalDefaultText
            content={emailErrors}
            color="contrast"
            bgColor="main"
          />
        </div>
      )}

      {isReadOnly === true && (
        <div className="button-change-container">
          <ButtonStandard
            story="ghost-main"
            bold=""
            width="full"
            content="Change email"
            onClick={changeHandler}
          />
        </div>
      )}

      {isReadOnly === false && (
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
      )}
    </form>
  );
}
