import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

import "./styles.css";

export default function FormAddCategory({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
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
