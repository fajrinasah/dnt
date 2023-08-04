// import InputFile from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFile";
import InputSelect from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSelect";
import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputTextArea from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputTextArea";
import InputNumber from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputNumber";
import InputSubmit from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import GuidesSelectMultiple from "../../../../../01-atoms/forAuthAndManage/texts/GuidesSelectMultiple";

import "./styles.css";

export default function FormEditInfoProduct({
  currentName,
  currentDescription,
  currentPrice,
  currentCategories,
  categoriesArr = [],
  changeCategories,
  setChangeCategories = () => {},
  submitHandler = () => {},
  disableSave = () => {},
  cancelHandler = () => {},
}) {
  const changeCategoriesHandler = () => {
    setChangeCategories(true);
  };

  const cancelChangeCategoriesHandler = () => {
    setChangeCategories(false);
  };

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
      </div>

      <InputText
        flexDirection="row"
        color="main"
        inputId="edit-product-name"
        labelText="Name"
        required={true}
        inputName="edit-product-name"
        autoCapitalize="words"
        defaultValue={currentName}
      />

      <InputTextArea
        flexDirection="row"
        color="main"
        inputId="edit-product-description"
        labelText="Description"
        required={true}
        inputName="edit-product-description"
        maxLength="255"
        defaultValue={currentDescription}
      />

      <InputNumber
        flexDirection="row"
        color="main"
        inputId="edit-product-price"
        labelText="Price"
        required={true}
        inputName="edit-product-price"
        defaultValue={currentPrice}
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
