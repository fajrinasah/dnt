/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
// buttons
import ButtonHelp from "../../../01-atoms/forAuthAndManage/buttons/ButtonHelp";
import ButtonStandard from "../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

import ImageContainer from "../../../01-atoms/forAuthAndManage/ImageContainer";

// INPUTS
import InputConfirmPassword from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputConfirmPassword";
import InputEmail from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputEmail";
import InputFile from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFile";
import InputFileCustom from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputFileCustom";
import InputNumber from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputNumber";
import InputPassword from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputPassword";
import InputSelect from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSelect";
import InputSubmit from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";
import InputText from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import InputTextArea from "../../../01-atoms/forAuthAndManage/inputs/formInputs/InputTextArea";

import InputToolbarSelect from "../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSelect";
import InputToolbarSearch from "../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSearch";

// titles
import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import TitleSection from "../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";

export function GeneralTest() {
  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Anthropology" },
    { id: 3, name: "Archaeology" },
    { id: 4, name: "Museology" },
    { id: 5, name: "Others" },
  ];

  return (
    <div className="big-container">
      <h1>Test</h1>
      <br />
      <br />
      <ButtonHelp detail="See password guides" />
      <br />
      <br />
      <ButtonStandard
        story="raised-warning"
        bold="bold"
        width="full"
        content="Change me"
      />

      <div className="sub-cont">
        <ImageContainer
          imgSource="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          shape="circle"
        />
      </div>

      <InputPassword flexDirection="column" labelText="Password" />
      <br />
      <br />
      <br />
      <InputConfirmPassword
        flexDirection="column"
        labelText="Confirm password"
      />
      <br />
      <br />
      <InputEmail labelText="Email" />
      <br />
      <br />

      <InputFile labelText="Image" />
      <br />
      <br />
      <InputFileCustom buttonContent="Choose image" width="full" />

      <br />
      <br />
      <InputNumber labelText="Price" />
      <br />
      <br />
      <InputSelect
        flexDirection="row"
        labelText="Categories"
        optionsArray={categories}
        multiple={true}
        placeholderOption="select categories"
      />

      <br />
      <br />
      <InputSubmit value="Submit" />

      <br />
      <br />
      <InputText flexDirection="row" labelText="Username" />

      <br />
      <br />
      <InputTextArea flexDirection="row" labelText="Description" />

      <br />
      <br />
      <br />
      <br />
      <InputToolbarSelect options={categories} label="Filter" />
      <br />
      <br />
      <InputToolbarSearch labelText="Search" inputPlaceholder="name" />
      <br />
      <br />
      <br />
      <br />

      <TitlePage />

      <br />
      <br />
      <br />
      <br />
      <TitleSection border="accent" />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
