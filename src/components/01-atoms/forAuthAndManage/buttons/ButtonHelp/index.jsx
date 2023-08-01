import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export default function ButtonHelp({ detail, onClick }) {
  return (
    <button type="button" className="button-help" onClick={onClick}>
      <span className="help-detail">{detail}</span>
      <FontAwesomeIcon
        icon={faCircleQuestion}
        size="xl"
        className="question-icon"
        aria-hidden="true"
      />
    </button>
  );
}
