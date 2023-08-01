// import InputFile from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFile";
import InputSelect from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSelect";
import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputTextArea from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputTextArea";
import InputNumber from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputNumber";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

import "./styles.css";
import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";
import InputFileCustom from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFileCustom";
import GuidesSelectMultiple from "../../../../../01-atoms/forAuthAndManage/texts/GuidesSelectMultiple";

export default function FormAddProduct({
  categoriesArr = [],
  submitHandler = () => {},
  changeImageHandler = () => {},
  // uploadImageHandler = () => {},
  disableSave = () => {},
  selectCategoriesHandler = () => {},
  // categoriesRef,
  nameRef,
  descriptionRef,
  priceRef,
  invalidImage,
  // invalidImageInfo,
  invalidName,
  // invalidNameInfo,
  invalidCategories,
  // invalidCategoriesInfo,
  invalidDescription,
  // invalidDescriptionInfo,
  invalidPrice,
  // invalidPriceInfo,
  cancelHandler = () => {},
}) {
  const invalidImageInfo =
    "Product's image is required. Please upload a valid image (.jpg, .jpeg, .png, .gif) with maximum size 1MB.";
  const invalidNameInfo =
    "Product's name is required and its length must be between 3 to 45 characters.";
  const invalidCategoriesInfo =
    "Product's category/categories data is required.";
  const invalidDescriptionInfo =
    "Product's description is required and its length must be between 10 to 255 characters.";
  const invalidPriceInfo = "Product's price is required.";

  return (
    <form onSubmit={submitHandler} className="form add-product d-flex-col">
      <div className="add-product-image-container">
        <InputFileCustom
          accept="image/jpg, image/jpeg, image/png, image/gif, image/JPG, image/JPEG, image/PNG, image/GIF, .jpg, .jpeg, .png, .gif"
          buttonContent="Choose image"
          onChange={changeImageHandler}
        />
      </div>

      {invalidImage && (
        <div className="error-container add-product-image d-flex-row">
          <ModalDefaultText
            content={invalidImageInfo}
            color="contrast"
            bgColor="main"
          />
        </div>
      )}

      <div className="multi-select-container d-flex-col">
        <GuidesSelectMultiple />

        <InputSelect
          flexDirection="row"
          color="main"
          inputId="categories"
          labelText="Categories"
          optionsArray={categoriesArr}
          multiple={true}
          placeholderOption="select one or more categories"
          onChange={selectCategoriesHandler}
        />

        {invalidCategories && (
          <div className="error-container add-product-categories d-flex-row">
            <ModalDefaultText
              content={invalidCategoriesInfo}
              color="contrast"
              bgColor="main"
            />
          </div>
        )}
      </div>

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

      {invalidName && (
        <div className="error-container add-product-name d-flex-row">
          <ModalDefaultText
            content={invalidNameInfo}
            color="contrast"
            bgColor="main"
          />
        </div>
      )}

      <InputTextArea
        flexDirection="row"
        color="main"
        inputId="description"
        labelText="Description"
        required={true}
        inputName="description"
        maxLength="255"
        inputPlaceholder="enter new product's description here"
        ref={descriptionRef}
      />

      {invalidDescription && (
        <div className="error-container add-product-description d-flex-row">
          <ModalDefaultText
            content={invalidDescriptionInfo}
            color="contrast"
            bgColor="main"
          />
        </div>
      )}

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

      {invalidPrice && (
        <div className="error-container add-product-price d-flex-row">
          <ModalDefaultText
            content={invalidPriceInfo}
            color="contrast"
            bgColor="main"
          />
        </div>
      )}

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
