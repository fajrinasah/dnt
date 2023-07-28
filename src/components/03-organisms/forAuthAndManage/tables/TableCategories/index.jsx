import ManageCategoriesAndProductsTableRow from "../../../../02-molecules/forAuthAndManage/tableRows/ManageCategoriesAndProductsTableRow";
import "../styles.css";

export default function TableCategories({
  categoriesArr = [],
  categoryOnClick = (id = 0) => {},
}) {
  const RenderCategoryRows = () => {
    const results = [];

    for (let i = 0; i < categoriesArr.length; i++) {
      if (i === 0 || i % 2 === 0) {
        results.push(
          <ManageCategoriesAndProductsTableRow
            type="bodyrow-light"
            numberValue={i + 1}
            nameValue={categoriesArr[i].name}
            createdAt={categoriesArr[i].created_at}
            updatedAt={categoriesArr[i].updated_at}
            onClick={() => categoryOnClick(categoriesArr[i].name)}
          />
        );
      } else {
        results.push(
          <ManageCategoriesAndProductsTableRow
            type="bodyrow-dark"
            numberValue={i + 1}
            nameValue={categoriesArr[i].name}
            createdAt={categoriesArr[i].created_at}
            updatedAt={categoriesArr[i].updated_at}
            onClick={() => categoryOnClick(categoriesArr[i].id)}
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
