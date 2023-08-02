import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";

import "./styles.css";

export default function FormEditNameCategory({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  disableSubmit,
  nameTouched,
  nameErrors,
  nameValue,
}) {
  return (
    <form onSubmit={onSubmit} className="form edit-name-category d-flex-col">
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
        <div className="error-container edit-name-category d-flex-row">
          <ModalDefaultText
            content={nameErrors}
            color="contrast"
            bgColor="main"
          />
        </div>
      )}

      <div className="input-submit-container d-flex-row">
        <InputSubmit
          value="Save"
          disabled={disableSubmit}
          story="ghost-main"
          width="full"
        />
      </div>
    </form>
  );
}
