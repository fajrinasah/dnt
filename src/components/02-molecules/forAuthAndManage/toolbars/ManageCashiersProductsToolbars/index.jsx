import InputToolbarSelect from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSelect";
import InputToolbarSearch from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSearch";
import InputToolbarSort from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSort";
import InputSubmit from "../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

import "./styles.css";

export default function ManageCashiersProductsToolbars({
  type = "", // "cashiers" or "products"
  sortingOptions = [{ id: 0, name: "" }],
  refSortingOption,
  refSortingMethod,
  filterOptions = [{ id: 0, name: "" }],
  refFilterOption,
  refSearch,
}) {
  return (
    <form className="form toolbars cashiers products d-flex-row">
      <fieldset className="sort d-flex-row">
        <InputToolbarSort
          forId={
            type === "cashiers"
              ? "cashiersSortingOptions"
              : "productsSortingOptions"
          }
          label="Sort"
          options={sortingOptions}
          refSortingOption={refSortingOption}
          refSortingMethod={refSortingMethod}
        />
      </fieldset>

      <fieldset className="filter">
        <InputToolbarSelect
          forId={
            type === "cashiers"
              ? "cashiersFilterStatus"
              : "productsFilterStatus"
          }
          label="Filter"
          options={filterOptions}
          refFilterOption={refFilterOption}
        />
      </fieldset>

      <fieldset className="search">
        <InputToolbarSearch
          inputId={
            type === "cashiers" ? "searchCashierName" : "searchProductName"
          }
          inputName={
            type === "cashiers" ? "searchCashierName" : "searchProductName"
          }
          inputPlaceholder={
            type === "cashiers" ? "cashier's name" : "product's name"
          }
          refSearch={refSearch}
        />
      </fieldset>
      <InputSubmit value="Show results" story="ghost-main" width="auto" />
    </form>
  );
}
