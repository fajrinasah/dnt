import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import ModalDefaultText from "../../../01-atoms/forAuthAndManage/texts/ModalDefaultText";

export function toastBlank(content = "") {
  toast.custom(
    <ModalDefaultText
      type="toast"
      color="contrast"
      bgColor="main"
      bold=""
      content={<p>{content}</p>}
    />
  );
}

export function toastSuccess(content = "") {
  toast.custom(
    <ModalDefaultText
      type="toast"
      color="contrast"
      bgColor="accent"
      bold=""
      content={
        <div>
          <FontAwesomeIcon icon={faCircleCheck} className="toast-icon" />
          <p>{content}</p>
        </div>
      }
    />
  );
}

export function toastError(content = "") {
  toast.custom(
    <ModalDefaultText
      type="toast"
      color="main"
      bgColor="warning"
      bold="bold"
      content={
        <div>
          <FontAwesomeIcon icon={faCircleXmark} className="toast-icon" />
          <p>{content}</p>
        </div>
      }
    />
  );
}
