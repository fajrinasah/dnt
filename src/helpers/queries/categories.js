/*===========================================
GENERATE QUERY FOR CATEGORIES QUERY
=============================================*/

export const generateCategoriesQuery = ({
  name = "",
  sortingOption = "",
  sortingMethod = "",
}) => {
  let query = "";
  if (!name && !sortingOption) {
    return query;
  } else {
    query += "?";
  }

  if (name) {
    query += `name=${name}`;
  }

  if (name && sortingOption) {
    query += `&${sortingOption}=${sortingMethod}`;
  } else {
    query += `${sortingOption}=${sortingMethod}`;
  }

  return query;
};
