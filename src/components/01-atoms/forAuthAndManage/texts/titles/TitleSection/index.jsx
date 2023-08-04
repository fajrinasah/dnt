import "./styles.css";

export default function TitleSection({
  content = "This is Section Title",
  size = "large",
  border = "accent",
}) {
  return (
    <div className={`title-section ${size} border-${border}`}>
      <h3>
        <span className="not-bold">{content}</span>
      </h3>
    </div>
  );
}
