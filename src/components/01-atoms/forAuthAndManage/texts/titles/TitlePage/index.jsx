import "./styles.css";

export default function TitlePage({ content = "This is Page Title" }) {
  return (
    <div className="title-page">
      <h2>
        <span className="not-bold">{content}</span>
      </h2>
    </div>
  );
}
