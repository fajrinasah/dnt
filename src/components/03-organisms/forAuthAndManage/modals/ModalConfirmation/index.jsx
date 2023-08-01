import ButtonStandard from "../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

import "./styles.css";

export default function ModalConfirmation({
  type = "warning", // "warning" and "standard"
  confirmationContent = "",
  confirmationDetails = "",
  actionName = "",
  cancelHandler = () => {},
  confirmHandler = () => {},
}) {
  return (
    <section className="modal confirmation d-flex-col">
      <h4>Are you sure you want to {confirmationContent}?</h4>
      <p>
        <em>{confirmationDetails}</em>
      </p>

      <div className="buttons-container d-flex-row">
        <ButtonStandard
          story="flat"
          bold=""
          width="auto"
          content="Cancel"
          onClick={cancelHandler}
        />

        <ButtonStandard
          story={type === "warning" ? "raised-warning" : "raised-accent"}
          bold={type === "warning" ? "bold" : ""}
          width="auto"
          content={actionName}
          onClick={confirmHandler}
        />
      </div>
    </section>
  );
}
