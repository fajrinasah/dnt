/*===========================================
GENERATE QUERY FOR PRODUCTS QUERY
=============================================*/

export const generateProductsQuery = ({
  status = "",
  category = "",
  name = "",
  sortingOption = "",
  sortingMethod = "",
}) => {
  let query = "";
  if (!status && !category && !name && !sortingOption) {
    return query;
  } else {
    query += "?";
  }

  if (status) {
    query += `status=${status}`;
  }

  if (status && category) {
    query += `&category=${category}`;
  } else if (category) {
    query += `category=${category}`;
  }

  if ((status || category) && name) {
    query += `&name=${name}`;
  } else if (name) {
    query += `name=${name}`;
  }

  if ((status || category || name) && sortingOption) {
    query += `&${sortingOption}=${sortingMethod}`;
  } else {
    query += `${sortingOption}=${sortingMethod}`;
  }

  return query;
};
