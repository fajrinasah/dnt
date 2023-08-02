import ManageCategoriesAndProductsTableRow from "../../../../02-molecules/forAuthAndManage/tableRows/ManageCategoriesAndProductsTableRow";
import "../styles.css";

export default function TableProducts({
  productsArr = [],
  openEditProductModal = (id) => {},
}) {
  const RenderProductRows = () => {
    const results = [];

    for (let i = 0; i < productsArr.length; i++) {
      if (i === 0 || i % 2 === 0) {
        results.push(
          <ManageCategoriesAndProductsTableRow
            key={i}
            type="bodyrow-light"
            numberValue={i + 1}
            nameValue={productsArr[i].name}
            createdAt={productsArr[i].created_at}
            updatedAt={productsArr[i].updated_at}
            onClick={() => openEditProductModal(productsArr[i].id)}
          />
        );
      } else {
        results.push(
          <ManageCategoriesAndProductsTableRow
            key={i}
            type="bodyrow-dark"
            numberValue={i + 1}
            nameValue={productsArr[i].name}
            createdAt={productsArr[i].created_at}
            updatedAt={productsArr[i].updated_at}
            onClick={() => openEditProductModal(productsArr[i].name)}
          />
        );
      }
    }

    return results;
  };

  return (
    <table className="table products">
      <thead>
        <ManageCategoriesAndProductsTableRow type="headrow" nameValue="Name" />
      </thead>
      <tbody>
        <RenderProductRows />
      </tbody>
    </table>
  );
}
