import "./styles.css";

export default function ManageCashiersTableRow({
  type = "bodyrow", // "bodyrow-light", "bodyrow-dark", "headrow",
  numberValue = 1,
  photoValue = "",
  usernameValue = "username",
  emailValue = "user@example.com",
  onClick = () => {},
}) {
  if (type === "headrow") {
    return (
      <tr className={`cashiers-table ${type} d-flex-row`} onClick={onClick}>
        <td className="number">No.</td>
        <td className="photo">Photo</td>
        <td className="username with-border">Username</td>
        <td className="email">Email</td>
      </tr>
    );
  } else {
    return (
      <tr className={`cashiers-table ${type} d-flex-row`} onClick={onClick}>
        <td className="number">{numberValue}.</td>
        <td className="photo">
          <img src={photoValue} alt="" />
        </td>
        <td className="username with-border">{usernameValue}</td>
        <td className="email">{emailValue}</td>
      </tr>
    );
  }
}
