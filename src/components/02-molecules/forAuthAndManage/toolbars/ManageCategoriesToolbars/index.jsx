import InputToolbarSearch from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSearch";
import InputToolbarSort from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSort";
import InputSubmit from "../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputSubmit";

import "./styles.css";

export default function ManageCategoriesToolbars({
  sortingOptions = [{ id: 0, name: "" }],
  refSortingOption,
  refSortingMethod,
  refSearch,
}) {
  return (
    <form className="form toolbars categories d-flex-row">
      <fieldset className="sort d-flex-row">
        <InputToolbarSort
          forId="categoriesSortingOptions"
          label="Sort"
          options={sortingOptions}
          refSortingOption={refSortingOption}
          refSortingMethod={refSortingMethod}
        />
      </fieldset>

      <fieldset className="search">
        <InputToolbarSearch
          inputId="searchCategoryName"
          inputName="searchCategoryName"
          inputPlaceholder="category's name"
          refSearch={refSearch}
        />
      </fieldset>
      <InputSubmit value="Show results" story="ghost-main" width="auto" />
    </form>
  );
}
