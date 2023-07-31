/*===========================================
GENERATE QUERY FOR CASHIERS QUERY
=============================================*/

export const generateCashiersQuery = ({
  status = "",
  username = "",
  sortingOption = "",
  sortingMethod = "",
}) => {
  let query = "";
  if (!status && !username && !sortingOption) {
    return query;
  } else {
    query += "?";
  }

  if (status != 0) {
    query += `status=${status}`;
  }

  if (status != 0 && username) {
    query += `&username=${username}`;
  } else if (username) {
    query += `username=${username}`;
  }

  if ((status != 0 && sortingOption) || (username && sortingOption)) {
    query += `&${sortingOption}=${sortingMethod}`;
  } else {
    query += `${sortingOption}=${sortingMethod}`;
  }

  return query;
};
