import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import "../../../buttons/ButtonStandard/styles.css";

export default function InputFileCustom({
  accept,
  buttonContent = "Choose file",
  onChange,
}) {
  return (
    <div className="input-file-custom-container d-flex-row button-standard ghost-main">
      <label className="input-file-custom">
        <input
          className="input-hidden"
          type="file"
          id="change-photo"
          name="file"
          accept={accept}
          onChange={onChange}
        />
        <FontAwesomeIcon icon={faUpload} /> {buttonContent}
        <span className="sr-only">Upload a photo</span>
      </label>
    </div>
  );
}
