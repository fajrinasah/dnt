import ManageCashiersTableRow from "../../../../02-molecules/forAuthAndManage/tableRows/ManageCashiersTableRow";
import "../styles.css";

export default function TableCashiers({
  cashiersArr = [],
  openEditCashierModal = ({
    cashierPhoto = "",
    joinedDate = "",
    cashierUsername = "",
    cashierCurrentEmail = "",
    cashierStatus = "",
  }) => {},
}) {
  const RenderCashierRows = () => {
    const results = [];

    for (let i = 0; i < cashiersArr.length; i++) {
      results.push(
        <ManageCashiersTableRow
          key={`cashier-data-${i}`}
          type={i === 0 || i % 2 === 0 ? "bodyrow-light" : "bodyrow-dark"}
          numberValue={i + 1}
          photoValue={cashiersArr[i].photo_profile}
          usernameValue={cashiersArr[i].username}
          emailValue={cashiersArr[i].email}
          onClick={() =>
            openEditCashierModal({
              cashierPhoto: cashiersArr[i].photo_profile,
              joinedDate: cashiersArr[i].created_at,
              cashierUsername: cashiersArr[i].username,
              cashierCurrentEmail: cashiersArr[i].email,
              cashierStatus: cashiersArr[i].user_status_id,
            })
          }
        />
      );
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
