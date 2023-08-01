import "./styles.css";

export default function InputToolbarSort({
  forId = "",
  label = "Choose an option",
  options = [{ id: 0, name: "", selected: false }],
  refSortingOption,
  setCurrentSortingMethod = () => {},
  currentSortingMethod,
}) {
  const RenderOptions = () =>
    options.map((option) => {
      return (
        <option key={option.id} value={option.id} selected={option.selected}>
          {option.name}
        </option>
      );
    });

  return (
    <div className="input-toolbar-sort d-flex-row">
      <label htmlFor={`${forId}-select`} className="label-for-select">
        {label}
      </label>

      <select
        name={`${forId}-select`}
        id={`${forId}-select`}
        className="select-for-label"
        ref={refSortingOption}
      >
        <RenderOptions />
      </select>

      <div className="radios-container d-flex-row">
        <div className="radio-container d-flex-row">
          <label htmlFor="sortAsc">ASC</label>
          <input
            type="radio"
            name="sortingMethod"
            id="sortAsc"
            checked={currentSortingMethod === "ASC"}
            value="ASC"
            onChange={() => setCurrentSortingMethod("ASC")}
          />
        </div>
        <div className="radio-container d-flex-row">
          <label htmlFor="sortDesc">DESC</label>
          <input
            type="radio"
            name="sortingMethod"
            id="sortDesc"
            checked={currentSortingMethod === "DESC"}
            value="DESC"
            onChange={() => setCurrentSortingMethod("DESC")}
          />
        </div>
      </div>
    </div>
  );
}
