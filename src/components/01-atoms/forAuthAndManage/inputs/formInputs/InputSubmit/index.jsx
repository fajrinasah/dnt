import "../../../buttons/ButtonStandard/styles.css";

export default function InputSubmit({
  value = "Submit",
  disabled = false,
  story = "raised-accent",
  width = "full",
}) {
  return (
    <input
      type="submit"
      value={value}
      className={`input-submit button-standard ${story} w-${width}`}
      disabled={disabled}
    />
  );
}
