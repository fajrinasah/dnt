import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

import "./styles.css";

export default function FormEditNameCategory({
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
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

      <div className="input-submit-container d-flex-row">
        <InputSubmit
          value="Save"
          disabled={isSubmitting}
          story="ghost-main"
          width="full"
        />
      </div>
    </form>
  );
}
