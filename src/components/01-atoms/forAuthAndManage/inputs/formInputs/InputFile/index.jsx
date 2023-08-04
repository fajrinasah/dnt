import "../styles.css";

export default function InputFile({
  flexDirection = "row",
  color = "accent",
  inputId = "",
  labelText = "",
  required = true,
  inputName = "",
  inputPlaceholder = "",
  multiple = true,
  accept = "",
  title = "",
  onChange,
}) {
  return (
    <div
      className={`input-file label-and-input d-flex-${flexDirection} ${color}`}
    >
      <label htmlFor={inputId} className="label-for-input">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="file"
        required={required}
        id={inputId}
        name={inputName}
        placeholder={inputPlaceholder}
        multiple={multiple}
        accept={accept}
        title={title}
        onChange={onChange}
      />
    </div>
  );
}
