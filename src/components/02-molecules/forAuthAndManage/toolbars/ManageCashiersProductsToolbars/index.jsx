import InputToolbarSelect from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSelect";
import InputToolbarSearch from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSearch";
import InputToolbarSort from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSort";

import "./styles.css";
import ButtonStandard from "../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

export default function ManageCashiersProductsToolbars({
  type = "", // "cashiers" or "products"
  sortingOptions = [{ id: 0, name: "", selected: false }],
  refSortingOption,
  filterOptions = [{ id: 0, name: "", selected: false }],
  refFilterOption,
  refSearch,
  onSubmit = () => {},
  onReset = () => {},
  setCurrentSortingMethod = () => {},
  currentSortingMethod,
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
          setCurrentSortingMethod={setCurrentSortingMethod}
          currentSortingMethod={currentSortingMethod}
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

      <ButtonStandard
        story="ghost-main"
        width="auto"
        content="Show results"
        bold=""
        onClick={onSubmit}
      />

      <ButtonStandard
        story="flat"
        width="auto"
        content="Reset"
        bold=""
        onClick={onReset}
      />
    </form>
  );
}
