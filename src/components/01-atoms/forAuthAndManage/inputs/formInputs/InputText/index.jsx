import "../styles.css";

export default function InputText({
  flexDirection = "row",
  inputId = "",
  labelText = "",
  required = true,
  autoCapitalize = "",
  inputName = "",
  inputPlaceholder = "",
  // defaultValue,
  // minLength = "",
  // maxLength = "",
  // pattern = "",
  // title = "",
  ref,
  // value,
  // onChange,
  // onBlur,
}) {
  return (
    <div className={`label-and-input d-flex-${flexDirection}`}>
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
        // defaultValue={defaultValue}
        // minLength={minLength}
        // maxLength={maxLength}
        // pattern={pattern}
        // title={title}
        ref={ref}
        // value={value}
        // onChange={onChange}
        // onBlur={onBlur}
      />
    </div>
  );
}
