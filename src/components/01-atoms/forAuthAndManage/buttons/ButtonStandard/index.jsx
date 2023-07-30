import "./styles.css";

export default function ButtonStandard({
  story = "ghost",
  bold = "bold",
  width = "auto",
  content,
  onClick,
  id,
  disabled,
}) {
  return (
    <button
      type="button"
      className={`button-standard ${story} ${bold} w-${width}`}
      onClick={onClick}
      id={id}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
