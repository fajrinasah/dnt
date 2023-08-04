import ManageCategoriesAndProductsTableRow from "../../../../02-molecules/forAuthAndManage/tableRows/ManageCategoriesAndProductsTableRow";

import "../styles.css";

export default function TableCategories({
  categoriesArr = [],
  openEditNameCategoryModal = ({ id, name }) => {},
}) {
  const RenderCategoryRows = () => {
    const results = [];

    for (let i = 0; i < categoriesArr.length; i++) {
      if (i === 0 || i % 2 === 0) {
        results.push(
          <ManageCategoriesAndProductsTableRow
            key={i}
            type="bodyrow-light"
            numberValue={i + 1}
            nameValue={categoriesArr[i].name}
            createdAt={categoriesArr[i].created_at}
            updatedAt={categoriesArr[i].updated_at}
            onClick={() =>
              openEditNameCategoryModal({
                id: categoriesArr[i].id,
                name: categoriesArr[i].name,
              })
            }
          />
        );
      } else {
        results.push(
          <ManageCategoriesAndProductsTableRow
            key={i}
            type="bodyrow-dark"
            numberValue={i + 1}
            nameValue={categoriesArr[i].name}
            createdAt={categoriesArr[i].created_at}
            updatedAt={categoriesArr[i].updated_at}
            onClick={() =>
              openEditNameCategoryModal({
                id: categoriesArr[i].id,
                name: categoriesArr[i].name,
              })
            }
          />
        );
      }
    }

    return results;
  };

  return (
    <table className="table categories">
      <thead>
        <ManageCategoriesAndProductsTableRow type="headrow" nameValue="Name" />
      </thead>
      <tbody>
        <RenderCategoryRows />
      </tbody>
    </table>
  );
}
