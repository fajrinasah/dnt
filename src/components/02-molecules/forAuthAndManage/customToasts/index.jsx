import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

export function toastBlank(content = "") {
  toast.custom(
    <div className="modal-default-text toast d-flex-row color-contrast bg-main bold">
      <div className="frame">
        <div className="modal-content d-flex-row">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export function toastSuccess(content = "") {
  toast.custom(
    <div className="modal-default-text toast d-flex-row color-main bg-contrast bold">
      <div className="frame">
        <div className="modal-content d-flex-row">
          <FontAwesomeIcon icon={faCircleCheck} className="toast-icon" />
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export function toastError(content = "") {
  toast.custom(
    <div className="modal-default-text toast d-flex-row color-main bg-accent bold">
      <div className="frame">
        <div className="modal-content d-flex-row">
          <FontAwesomeIcon icon={faCircleXmark} className="toast-icon" />
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
