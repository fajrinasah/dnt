import ManageCategoriesAndProductsTableRow from "../../../../02-molecules/forAuthAndManage/tableRows/ManageCategoriesAndProductsTableRow";

import "../styles.css";

export default function TableProducts({
  page,
  productsArr = [],
  openEditProductModal = (id) => {},
}) {
  const RenderProductRows = () => {
    const results = [];

    for (let i = 0; i < productsArr.length; i++) {
      results.push(
        <ManageCategoriesAndProductsTableRow
          key={i}
          type={i === 0 || i % 2 === 0 ? "bodyrow-light" : "bodyrow-dark"}
          numberValue={
            page === 1 || page === "1" ? i + 1 : (page - 1) * 10 + (i + 1)
          }
          nameValue={productsArr[i].name}
          createdAt={productsArr[i].created_at}
          updatedAt={productsArr[i].updated_at}
          onClick={() => openEditProductModal(productsArr[i].id)}
        />
      );
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
