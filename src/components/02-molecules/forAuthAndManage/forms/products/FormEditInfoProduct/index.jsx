// import InputFile from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFile";
import InputSelect from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSelect";
import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputTextArea from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputTextArea";
import InputNumber from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputNumber";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
// import ModalDefaultText from "../../../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";
import GuidesSelectMultiple from "../../../../../01-atoms/forAuthAndManage/texts/GuidesSelectMultiple";

import "./styles.css";
import { useState } from "react";

export default function FormEditInfoProduct({
  currentName,
  currentDescription,
  currentPrice,
  currentCategories,
  // setSelectedCategories = () => {},
  categoriesArr = [],
  changeCategories,
  setChangeCategories = () => {},
  submitHandler = () => {},
  // uploadImageHandler = () => {},
  disableSave = () => {},
  // selectCategoriesHandler = () => {},
  // // categoriesRef,
  // nameRef,
  // descriptionRef,
  // priceRef,
  // // invalidImage,
  // // invalidImageInfo,
  // invalidName,
  // // invalidNameInfo,
  // invalidCategories,
  // // invalidCategoriesInfo,
  // invalidDescription,
  // // invalidDescriptionInfo,
  // invalidPrice,
  // // invalidPriceInfo,

  cancelHandler = () => {},
}) {
  const changeCategoriesHandler = () => {
    setChangeCategories(true);
  };

  const cancelChangeCategoriesHandler = () => {
    setChangeCategories(false);
    // setSelectedCategories([]);
  };

  // const invalidNameInfo =
  //   "Product's name is required and its length must be between 3 to 45 characters.";
  // const invalidCategoriesInfo =
  //   "Product's category/categories data is required.";
  // const invalidDescriptionInfo =
  //   "Product's description is required and its length must be between 10 to 255 characters.";
  // const invalidPriceInfo = "Product's price is required.";

  return (
    <form
      onSubmit={submitHandler}
      className="form edit-info-product d-flex-col"
    >
      <div className="multi-select-container d-flex-col">
        <GuidesSelectMultiple />

        {!changeCategories && (
          <div className="current-categories d-flex-col">
            <InputText
              readOnly={true}
              flexDirection="row"
              color="main"
              inputId="current-categories"
              labelText="Categories"
              inputName="current-categories"
              defaultValue={currentCategories}
            />

            <ButtonStandard
              story="ghost-main"
              bold=""
              width="full"
              content="Change categories"
              onClick={changeCategoriesHandler}
            />
          </div>
        )}

        {changeCategories && (
          <div className="change-categories d-flex-col">
            <InputSelect
              flexDirection="row"
              color="main"
              inputId="edit-product-categories"
              labelText="Categories"
              optionsArray={categoriesArr}
              multiple={true}
              // placeholderOption="select one or more categories"
              // onChange={selectCategoriesHandler}
            />

            <ButtonStandard
              story="flat"
              bold=""
              width="full"
              content="Cancel change categories"
              onClick={cancelChangeCategoriesHandler}
            />
          </div>
        )}
        {/* 
        {invalidCategories && (
          <div className="error-container add-product-categories d-flex-row">
            <ModalDefaultText
              content={invalidCategoriesInfo}
              color="contrast"
              bgColor="main"
            />
          </div>
        )} */}
      </div>

      <InputText
        flexDirection="row"
        color="main"
        inputId="edit-product-name"
        labelText="Name"
        required={true}
        inputName="edit-product-name"
        autoCapitalize="words"
        // inputPlaceholder="enter product's name here"
        // ref={nameRef}
        defaultValue={currentName}
      />

      {/* {invalidName && (
        <div className="error-container add-product-name d-flex-row">
          <ModalDefaultText
            content={invalidNameInfo}
            color="contrast"
            bgColor="main"
          />
        </div>
      )} */}

      <InputTextArea
        flexDirection="row"
        color="main"
        inputId="edit-product-description"
        labelText="Description"
        required={true}
        inputName="edit-product-description"
        maxLength="255"
        // inputPlaceholder="enter new product's description here"
        // ref={descriptionRef}
        defaultValue={currentDescription}
      />

      {/* {invalidDescription && (
        <div className="error-container add-product-description d-flex-row">
          <ModalDefaultText
            content={invalidDescriptionInfo}
            color="contrast"
            bgColor="main"
          />
        </div>
      )} */}

      <InputNumber
        flexDirection="row"
        color="main"
        inputId="edit-product-price"
        labelText="Price"
        required={true}
        inputName="edit-product-price"
        // inputPlaceholder="enter new product's price here"
        // ref={priceRef}
        defaultValue={currentPrice}
      />

      {/* {invalidPrice && (
        <div className="error-container add-product-price d-flex-row">
          <ModalDefaultText
            content={invalidPriceInfo}
            color="contrast"
            bgColor="main"
          />
        </div>
      )} */}

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
