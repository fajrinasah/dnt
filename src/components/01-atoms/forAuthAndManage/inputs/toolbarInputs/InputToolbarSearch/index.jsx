import "./styles.css";

export default function InputToolbarSearch({
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
    <div className="input-toolbar-search d-flex-row">
      <label htmlFor={inputId} className="">
        {labelText}
      </label>
      <input
        className="input-for-label"
        type="search"
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
