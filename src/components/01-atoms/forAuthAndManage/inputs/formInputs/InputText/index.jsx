import "../styles.css";

export default function InputText({
  id,
  flexDirection = "row",
  color = "accent",
  inputId = "",
  labelText = "",
  required = true,
  autoCapitalize = "",
  inputName = "",
  inputPlaceholder = "",
  defaultValue,
  title = "",
  ref,
  value,
  onChange,
  onBlur,
  readOnly = false,
}) {
  return (
    <div
      className={`input-text label-and-input d-flex-${flexDirection} ${color}`}
      id={id}
    >
      <label htmlFor={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="text"
        required={required}
        autoCapitalize={autoCapitalize}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        defaultValue={defaultValue}
        title={title}
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
      />
    </div>
  );
}
