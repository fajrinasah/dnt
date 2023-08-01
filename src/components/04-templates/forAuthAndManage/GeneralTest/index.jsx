/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import "./styles.css";

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
import InputToolbarSort from "../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSort";

// titles
import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import TitleSection from "../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";

/*--------------------------------------------------------------*/
// forms
import FormLogin from "../../../02-molecules/forAuthAndManage/forms/auth/FormLogin";
import FormForgotPassword from "../../../02-molecules/forAuthAndManage/forms/auth/FormForgotPassword";
import FormVerifyOtp from "../../../02-molecules/forAuthAndManage/forms/auth/FormVerifyOtp";
import FormResetPassword from "../../../02-molecules/forAuthAndManage/forms/auth/FormResetPassword";

import FormAddCashier from "../../../02-molecules/forAuthAndManage/forms/cashiers/FormAddCashier";
import FormEditEmailCashier from "../../../02-molecules/forAuthAndManage/forms/cashiers/FormEditEmailCashier";

import FormAddCategory from "../../../02-molecules/forAuthAndManage/forms/categories/FormAddCategory";
import FormEditNameCategory from "../../../02-molecules/forAuthAndManage/forms/categories/FormEditNameCategory";

import FormAddProduct from "../../../02-molecules/forAuthAndManage/forms/products/FormAddProduct";
import FormEditInfoProduct from "../../../02-molecules/forAuthAndManage/forms/products/FormEditInfoProduct";

// pagination
import ManageCashiersProductsPagination from "../../../02-molecules/forAuthAndManage/ManageCashiersProductsPagination";

// tr
import ManageCashiersTableRow from "../../../02-molecules/forAuthAndManage/tableRows/ManageCashiersTableRow";
import ManageCategoriesAndProductsTableRow from "../../../02-molecules/forAuthAndManage/tableRows/ManageCategoriesAndProductsTableRow";

// toolbars
import ManageCashiersToolbars from "../../../02-molecules/forAuthAndManage/toolbars/ManageCashiersProductsToolbars";
import ManageCategoriesToolbars from "../../../02-molecules/forAuthAndManage/toolbars/ManageCategoriesToolbars";

/*--------------------------------------------------------------*/

// tables
import TableCashiers from "../../../03-organisms/forAuthAndManage/tables/TableCashiers";
import TableCategories from "../../../03-organisms/forAuthAndManage/tables/TableCategories";
import TableProducts from "../../../03-organisms/forAuthAndManage/tables/TableProducts";
import { useRef } from "react";

export function GeneralTest() {
  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Anthropology" },
    { id: 3, name: "Archaeology" },
    { id: 4, name: "Museology" },
    { id: 5, name: "Others" },
  ];

  const sortingOptions = [
    { id: 1, name: "Name" },
    { id: 2, name: "Time" },
  ];

  const cashiersData = [
    {
      id: 1,
      photo_profile:
        "https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "kumaebi",
      email: "kumaebi@example.com",
    },
    {
      id: 2,
      photo_profile:
        "https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      username: "kumaebi2",
      email: "kumaebi2@example.com",
    },
  ];

  const categoriesData = [
    { id: 1, name: "Teas", created_at: "2023/07/27", updated_at: "2023/07/28" },
    {
      id: 2,
      name: "Donuts",
      created_at: "2023/07/27",
      updated_at: "2023/07/28",
    },
  ];

  const productsData = [
    {
      id: 1,
      name: "Chai Latte",
      created_at: "2023/07/27",
      updated_at: "2023/07/28",
    },
    {
      id: 2,
      name: "Witch Blend",
      created_at: "2023/07/27",
      updated_at: "2023/07/28",
    },
  ];

  return (
    <div className="big-container">
      {/* <div className="test-atoms">
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
        <InputText flexDirection="row" color="accent" labelText="Username" />

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
        <div className="bg-accent">
          <br />
          <br />
          <InputToolbarSelect options={categories} label="Filter" />
          <br />
          <br />
          <InputToolbarSearch labelText="Search" inputPlaceholder="name" />
          <br />
          <br />
          <InputToolbarSort options={sortingOptions} label="Sort" />
        </div>
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
      </div> */}

      {/* <div className="test-molecules d-flex-col">
        <FormLogin />
        <br />
        <br />
        <FormForgotPassword />
        <br />
        <br />
        <FormVerifyOtp />
        <br />
        <br />
        <FormResetPassword />
        <br />
        <br />
        <div className="card">
          <FormAddCashier />
        </div>

        <br />
        <br />
        <div className="card">
          <FormEditEmailCashier />
        </div>
        <br />
        <br />
        <div className="card">
          <FormAddCategory />
        </div>
        <br />
        <br />
        <div className="card">
          <FormEditNameCategory />
        </div>
        <br />
        <br />
        <div className="card">
          <FormAddProduct />
        </div>
        <br />
        <br />
        <div className="card">
          <FormEditInfoProduct />
        </div>
        <br />
        <br />

        <ManageCashiersProductsPagination totalPage="5" />

        <br />
        <br />
        <ManageCashiersTableRow
          type="headrow"
          numberValue="No."
          photoValue="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <ManageCashiersTableRow
          type="bodyrow-dark"
          numberValue="1"
          photoValue="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <ManageCashiersTableRow
          type="bodyrow-light"
          numberValue="2"
          photoValue="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <br />
        <br />
        <br />
        <br />
        <ManageCategoriesAndProductsTableRow
          type="headrow"
          nameValue="Category"
        />
        <ManageCategoriesAndProductsTableRow
          type="bodyrow-light"
          numberValue="21"
          nameValue="Teas"
          createdAt="2023/07/28"
          updatedAt="2023/07/27"
        />
        <ManageCategoriesAndProductsTableRow
          type="bodyrow-dark"
          numberValue="22"
          nameValue="Decaffeinated Black Teas"
          createdAt="2023/07/28"
          updatedAt="2023/07/27"
        />
        <br />
        <br />
        <ManageCashiersToolbars
          type="cashiers"
          sortingOptions={sortingOptions}
          filterOptions={categories}
        />
        <br />
        <br />
        <ManageCashiersToolbars
          type="products"
          sortingOptions={sortingOptions}
          filterOptions={categories}
        />
        <br />
        <br />
        <ManageCategoriesToolbars sortingOptions={sortingOptions} />
        <br />
        <br />
        <br />
        <br />
      </div> */}

      <div className="d-flex-row">
        <div className="card">
          <FormAddProduct />
        </div>
      </div>

      {/* <div className="test-organisms">
        <TableCashiers cashiersArr={cashiersData} />
        <br />
        <br />
        <br />
        <TableCategories categoriesArr={categoriesData} />
        <br />
        <br />
        <br />
        <TableProducts productsArr={productsData} />
        <br />
        <br />
        <br />
      </div> */}
    </div>
  );
}
