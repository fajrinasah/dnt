import InputSelect from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSelect";
import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputTextArea from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputTextArea";
import InputNumber from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputNumber";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import InputFileCustom from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFileCustom";
import GuidesSelectMultiple from "../../../../../01-atoms/forAuthAndManage/texts/GuidesSelectMultiple";

import "./styles.css";

export default function FormAddProduct({
  categoriesArr = [],
  submitHandler = () => {},
  changeImageHandler = () => {},
  disableSave = () => {},
  cancelHandler = () => {},
}) {
  return (
    <form onSubmit={submitHandler} className="form add-product d-flex-col">
      <div className="add-product-image-container">
        <InputFileCustom
          accept="image/jpg, image/jpeg, image/png, image/gif, image/JPG, image/JPEG, image/PNG, image/GIF, .jpg, .jpeg, .png, .gif"
          buttonContent="Choose image"
          onChange={changeImageHandler}
        />
      </div>

      <div className="multi-select-container d-flex-col">
        <GuidesSelectMultiple />

        <InputSelect
          flexDirection="row"
          color="main"
          inputId="categories"
          labelText="Categories"
          optionsArray={categoriesArr}
          multiple={true}
        />
      </div>

      <InputText
        flexDirection="row"
        color="main"
        inputId="product-name"
        labelText="Name"
        required={true}
        inputName="product-name"
        autoCapitalize="words"
        inputPlaceholder="enter new product's name here"
      />

      <InputTextArea
        flexDirection="row"
        color="main"
        inputId="description"
        labelText="Description"
        required={true}
        inputName="description"
        maxLength="255"
        inputPlaceholder="enter new product's description here"
      />

      <InputNumber
        flexDirection="row"
        color="main"
        inputId="price"
        labelText="Price"
        required={true}
        inputName="price"
        inputPlaceholder="enter new product's price here"
      />

      <div className="input-submit-container d-flex-col">
        <InputSubmit
          value="Save"
          disabled={disableSave}
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
