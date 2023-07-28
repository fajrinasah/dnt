import "./styles.css";

export default function InputToolbarSelect({
  forId = "",
  label = "Choose an option",
  options = [{ id: 0, name: "" }],
  value = {},
  onBlur = () => {},
  onChange = () => {},
}) {
  const RenderOptions = () =>
    options.map((option) => {
      return (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      );
    });

  return (
    <div className="input-toolbar-select d-flex-row">
      <label htmlFor={`${forId}-select`} className="label-for-select">
        {label}
      </label>

      <select
        name={`${forId}-select`}
        id={`${forId}-select`}
        className="select-for-label"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      >
        <RenderOptions />
      </select>
    </div>
  );
}
