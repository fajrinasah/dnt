import NavLinkForHeader from "../../../01-atoms/forAuthAndManage/NavLinkForHeader";

import "./styles.css";

export default function Nav({
  toggleReportsDropdown = () => {},
  reportsDropdown = false,
}) {
  return (
    <ul className="nav" role="list">
      <li className="navlink-li">
        <NavLinkForHeader
          destination="/manage/cashiers"
          navlinkName="cashiers"
          content="Manage Cashiers"
        />
      </li>

      <li className="navlink-li">
        <NavLinkForHeader
          destination="/manage/categories"
          navlinkName="categories"
          content="Manage Categories"
        />
      </li>

      <li className="navlink-li">
        <NavLinkForHeader
          destination="/manage/products"
          navlinkName="products"
          content="Manage Products"
        />
      </li>

      <li className="navlink-li reports">
        <div className="navlink-container reports">
          <div className="navlink d-flex-col">
            <button
              onClick={toggleReportsDropdown}
              className="icon"
              title="Manage Reports"
            >
              <span className="sr-only">Show Manage Reports Navigations</span>
            </button>
          </div>
        </div>

        {reportsDropdown && (
          <ul className="subnav reports-dropdown d-flex-col" role="list">
            <li className="navlink-li">
              <NavLinkForHeader
                type="text"
                destination="/manage/reports/sales-reports"
                navlinkName="sales-reports"
                content="Sales Reports"
              />
            </li>

            <li className="navlink-li">
              <NavLinkForHeader
                type="text"
                destination="/manage/reports/product-sold"
                navlinkName="product-sold"
                content="Sold Products"
              />
            </li>

            <li className="navlink-li">
              <NavLinkForHeader
                type="text"
                destination="/manage/reports/sales-aggregates"
                navlinkName="sales-aggregates"
                content="Sales Aggregates"
              />
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}
