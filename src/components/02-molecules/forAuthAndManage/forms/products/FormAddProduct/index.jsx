import InputFile from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFile";
import InputSelect from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSelect";
import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputTextArea from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputTextArea";
import InputNumber from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputNumber";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

import "./styles.css";

export default function FormAddProduct({
  categoriesArr = [],
  submitHandler = () => {},
  uploadImageHandler = () => {},
  isSubmitting = () => {},
  categoriesRef,
  nameRef,
  descriptionRef,
  priceRef,
  cancelHandler = () => {},
}) {
  return (
    <form onSubmit={submitHandler} className="form add-product d-flex-col">
      <InputFile
        flexDirection="row"
        color="main"
        inputId="image"
        labelText="Image"
        inputName="image"
        inputPlaceholder=""
        accept="image/jpg, image/gif, image/png"
        onChange={uploadImageHandler}
        required={true}
      />

      <InputSelect
        flexDirection="row"
        color="main"
        inputId="categories"
        labelText="Categories"
        optionsArray={categoriesArr}
        multiple={true}
        placeholderOption="select categories"
        ref={categoriesRef}
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
        ref={nameRef}
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
        ref={descriptionRef}
      />

      <InputNumber
        flexDirection="row"
        color="main"
        inputId="price"
        labelText="Price"
        required={true}
        inputName="price"
        inputPlaceholder="enter new product's price here"
        ref={priceRef}
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
