import InputToolbarSearch from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSearch";
import InputToolbarSort from "../../../../01-atoms/forAuthAndManage/inputs/toolbarInputs/InputToolbarSort";
import ButtonStandard from "../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

import "../styles.css";

export default function ManageCategoriesToolbars({
  sortingOptions = [{ id: 0, name: "", selected: false }],
  refSortingOption,
  refSearch,
  setCurrentSortingMethod = () => {},
  currentSortingMethod,
  onSubmit = () => {},
  onReset = () => {},
}) {
  return (
    <form className="form toolbars categories d-flex-row">
      <div className="fieldsets-container d-flex-row">
        <fieldset className="sort d-flex-row">
          <InputToolbarSort
            forId="categories-sorting-options"
            label="Sort"
            options={sortingOptions}
            refSortingOption={refSortingOption}
            setCurrentSortingMethod={setCurrentSortingMethod}
            currentSortingMethod={currentSortingMethod}
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
