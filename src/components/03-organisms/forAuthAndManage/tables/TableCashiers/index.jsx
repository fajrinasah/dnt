import ManageCashiersTableRow from "../../../../02-molecules/forAuthAndManage/tableRows/ManageCashiersTableRow";
import "../styles.css";

export default function TableCashiers({
  cashiersArr = [],
  cashierOnClick = (username = "") => {},
}) {
  const RenderCashierRows = () => {
    const results = [];

    for (let i = 0; i < cashiersArr.length; i++) {
      if (i === 0 || i % 2 === 0) {
        results.push(
          <ManageCashiersTableRow
            type="bodyrow-light"
            numberValue={i + 1}
            photoValue={cashiersArr[i].photo_profile}
            usernameValue={cashiersArr[i].username}
            emailValue={cashiersArr[i].email}
            onClick={() => cashierOnClick(cashiersArr[i].username)}
          />
        );
      } else {
        results.push(
          <ManageCashiersTableRow
            type="bodyrow-dark"
            numberValue={i + 1}
            photoValue={cashiersArr[i].photo_profile}
            usernameValue={cashiersArr[i].username}
            emailValue={cashiersArr[i].email}
            onClick={() => cashierOnClick(cashiersArr[i].username)}
          />
        );
      }
    }

    return results;
  };

  return (
    <table className="table cashiers">
      <thead>
        <ManageCashiersTableRow type="headrow" />
      </thead>
      <tbody>
        <RenderCashierRows />
      </tbody>
    </table>
  );
}
