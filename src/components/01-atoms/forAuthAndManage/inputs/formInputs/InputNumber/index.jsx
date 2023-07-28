import "../styles.css";

export default function InputNumber({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  required = true,
  inputName = "",
  inputPlaceholder = "",
  defaultValue,
  min = "",
  max = "",
  step = "any",
  title = "",
  value,
  onChange,
  onBlur,
}) {
  return (
    <div className={`label-and-input d-flex-${flexDirection}`}>
      <label for={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="number"
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        title={title}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
