import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";

import "./styles.css";

export default function FormAddCategory({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  disableSubmit,
  nameTouched,
  nameErrors,
  nameValue,
  cancelHandler = () => {},
}) {
  return (
    <form onSubmit={onSubmit} className="form add-category d-flex-col">
      <InputText
        flexDirection="row"
        color="main"
        inputId="name"
        labelText="Category's name"
        required={true}
        inputName="name"
        inputPlaceholder="enter new category's name here"
        value={nameValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      {nameTouched && nameErrors && (
        <div className="error-container add-category-name d-flex-row">
          <ModalDefaultText
            content={nameErrors}
            color="contrast"
            bgColor="main"
          />
        </div>
      )}

      <div className="input-submit-container d-flex-col">
        <InputSubmit
          value="Save"
          disabled={disableSubmit}
          story="raised-main"
          width="full"
        />

        <ButtonStandard
          story="flat"
          bold=""
          width="full"
          content="Cancel"
          onClick={cancelHandler}
        />
      </div>
    </form>
  );
}
