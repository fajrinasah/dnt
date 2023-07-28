import "./styles.css";

export default function ButtonStandard({
  story = "ghost",
  bold = "bold",
  width = "auto",
  content,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`button-standard ${story} ${bold} w-${width}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
