import TitleSection from "../../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import FormAddCashier from "../../../../../02-molecules/forAuthAndManage/forms/cashiers/FormAddCashier";
import "./styles.css";

export default function ModalAddCashier() {
  return (
    <section className="modal add-cashier">
      <TitleSection content="Add Cashier" border="main" />
    </section>
  );
}
