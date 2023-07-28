import InputSelect from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSelect";
import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputTextArea from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputTextArea";
import InputNumber from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputNumber";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

import "./styles.css";

export default function FormEditInfoProduct({
  categoriesArr = [],
  onSubmit = () => {},
  handleBlur = () => {},
  handleChange = () => {},
  isSubmitting = () => {},
  categoriesValue,
  nameValue,
  descriptionValue,
  priceValue,
}) {
  return (
    <form onSubmit={onSubmit} className="form edit-info-product d-flex-col">
      <InputSelect
        flexDirection="row"
        color="main"
        inputId="categories"
        labelText="Categories"
        optionsArray={categoriesArr}
        multiple={true}
        placeholderOption="select categories"
        value={categoriesValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <InputText
        flexDirection="row"
        color="main"
        inputId="name"
        labelText="Name"
        required={true}
        inputName="name"
        autoCapitalize="words"
        inputPlaceholder="enter new product's name here"
        value={nameValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <InputTextArea
        flexDirection="row"
        color="main"
        inputId="description"
        labelText="Description"
        required={true}
        inputName="name"
        maxLength="255"
        inputPlaceholder="enter new product's description here"
        value={descriptionValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <InputNumber
        flexDirection="row"
        color="main"
        inputId="price"
        labelText="Price"
        required={true}
        inputName="price"
        inputPlaceholder="enter new product's price here"
        value={priceValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />

      <div className="input-submit-container d-flex-row">
        <InputSubmit
          value="Save product’s details changes"
          disabled={isSubmitting}
          story="ghost-main"
          width="full"
        />
      </div>
    </form>
  );
}
