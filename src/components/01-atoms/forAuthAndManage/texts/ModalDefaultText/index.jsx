import "./styles.css";

export default function ModalDefaultText({
  type = "", // "toast" or ""
  color = "contrast",
  bgColor = "main",
  content = "This is an information to alert user about something",
  bold = "",
}) {
  if (type !== "toast") {
    return (
      <div
        className={`modal-default-text ${type} color-${color} bg-${bgColor} ${bold} d-flex-row`}
      >
        <div className="frame">
          <div className="modal-content d-flex-row">
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`modal-default-text ${type} color-${color} bg-${bgColor} ${bold} d-flex-row`}
      >
        <div className="frame">
          <div className="modal-content d-flex-row">{content}</div>
        </div>
      </div>
    );
  }
}
