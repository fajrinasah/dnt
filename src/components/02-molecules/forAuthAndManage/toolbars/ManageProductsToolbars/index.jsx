import InputToolbarSelect from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSelect";
import InputToolbarSearch from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSearch";
import InputToolbarSort from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSort";
import ButtonStandard from "../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

import "../styles.css";

export default function ManageProductsToolbars({
  sortingOptions = [{ id: 0, name: "", selected: false }],
  refSortingOption,
  filterStatusOptions = [{ id: 0, name: "", selected: false }],
  filterCategoryOptions = [{ id: 0, name: "", selected: false }],
  refFilterStatusOption,
  refFilterCategoryOption,
  refSearch,
  onSubmit = () => {},
  onReset = () => {},
  setCurrentSortingMethod = () => {},
  currentSortingMethod,
}) {
  return (
    <form className="form toolbars products d-flex-row">
      <div className="fieldsets-container d-flex-row">
        <fieldset className="sort d-flex-row">
          <InputToolbarSort
            forId="productsSortingOptions"
            label="Sort"
            options={sortingOptions}
            refSortingOption={refSortingOption}
            setCurrentSortingMethod={setCurrentSortingMethod}
            currentSortingMethod={currentSortingMethod}
          />
        </fieldset>

        <fieldset className="filter d-flex-row">
          <InputToolbarSelect
            forId="productsFilterStatus"
            label="Status"
            options={filterStatusOptions}
            refFilterOption={refFilterStatusOption}
          />

          <InputToolbarSelect
            forId="productsFilterCategory"
            label="Category"
            options={filterCategoryOptions}
            refFilterOption={refFilterCategoryOption}
          />
        </fieldset>

        <fieldset className="search">
          <InputToolbarSearch
            inputId="searchProductName"
            inputName="searchProductName"
            inputPlaceholder="product's name"
            refSearch={refSearch}
          />
        </fieldset>
      </div>

      <div className="buttons-container d-flex-row">
        <ButtonStandard
          story="ghost-main"
          width="auto"
          content="Show"
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
      </div>
    </form>
  );
}
