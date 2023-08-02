import "../styles.css";

export default function InputSelect({
  flexDirection,
  color = "accent",
  inputId,
  labelText,
  ref,
  multiple = false,
  value,
  onChange,
  onBlur,
  optionsArray = [],
}) {
  const RenderOptions = () => {
    return optionsArray.map((option) => {
      return (
        <option key={option?.id} value={option?.id}>
          {option?.name}
        </option>
      );
    });
  };

  return (
    <div className={`label-and-input d-flex-${flexDirection} ${color}`}>
      <label htmlFor={inputId} className="label-for-input">
        {labelText}
      </label>
      <select
        className="input-for-label"
        name={inputId}
        id={inputId}
        ref={ref}
        multiple={multiple}
        size="5"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <RenderOptions />
      </select>
    </div>
  );
}
