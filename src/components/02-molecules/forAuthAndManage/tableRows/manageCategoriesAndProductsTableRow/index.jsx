import Moment from "react-moment";

import "./styles.css";

export default function ManageCategoriesAndProductsTableRow({
  type = "bodyrow", // "bodyrow-light", "bodyrow-dark", "headrow",
  numberValue = 0,
  nameValue = "",
  createdAt = "",
  updatedAt = "",
  onClick = () => {},
}) {
  if (type === "headrow") {
    return (
      <tr className={`cnp-table ${type} d-flex-row`} onClick={onClick}>
        <td className="number">No.</td>
        <td className="name with-border">{nameValue}</td>
        <td className="date with-border">Created at</td>
        <td className="date">Updated at</td>
      </tr>
    );
  } else {
    return (
      <tr className={`cnp-table ${type} d-flex-row`} onClick={onClick}>
        <td className="number">{numberValue}.</td>
        <td className="name with-border">{nameValue}</td>
        <td className="date with-border">
          <Moment format="MMMM Do YYYY">{createdAt}</Moment>
        </td>
        <td className="date">
          <Moment format="MMMM Do YYYY">{updatedAt}</Moment>
        </td>
      </tr>
    );
  }
}
