/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { keepLogin } from "../src/store/slices/auth/thunks";

import "./App.css";

/* PAGES */
import PageLogin from "./components/05-pages/forAuthAndManage/PageLogin";
import PageForgotPassword from "./components/05-pages/forAuthAndManage/PageForgotPassword";
import PageTokenVerification from "./components/05-pages/forAuthAndManage/PageTokenVerification";
import PageResetPassword from "./components/05-pages/forAuthAndManage/PageResetPassword";
import { GeneralTest } from "./components/04-templates/forAuthAndManage/GeneralTest";
import TempHome from "./components/04-templates/forAuthAndManage/TempHome";
import PageManageCashiers from "./components/05-pages/forAuthAndManage/PageManageCashiers";
import PageManageProducts from "./components/05-pages/forAuthAndManage/PageManageProducts";
import PageManageCategories from "./components/05-pages/forAuthAndManage/PageManageCategories";

import CreateTransactions from "./components/05-pages/CreateTransactions";
import SalesReports from "./components/05-pages/Reports/SalesReports";
import ProductSold from "./components/05-pages/Reports/ProductSold";
import SalesAggregates from "./components/05-pages/Reports/SalesAggregates";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(keepLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <header></header>
      <main>
        <Routes>
          <Route path="/test" element={<GeneralTest />} />
          <Route path="/temp" element={<TempHome />} />

          <Route path="/auth/login" element={<PageLogin />} />
          <Route
            path="/auth/forgot-password"
            element={<PageForgotPassword />}
          />
          <Route
            path="/auth/verify/:uuidWithContext"
            element={<PageTokenVerification />}
          />
          <Route
            path="/auth/reset-password/:uuidWithContext"
            element={<PageResetPassword />}
          />

          <Route path="/manage/cashiers" element={<PageManageCashiers />} />
          <Route path="/manage/products" element={<PageManageProducts />} />
          <Route path="/manage/categories" element={<PageManageCategories />} />
          <Route path="/manage/reports/sales-reports" element={<SalesReports />} />
          <Route path="/manage/reports/product-sold" element={<ProductSold />} />
          <Route path="/manage/reports/sales-aggregates" element={<SalesAggregates />} />

          <Route
            path="/create-transactions"
            element={<CreateTransactions />}
          ></Route>
        </Routes>
      </main>
      <footer></footer>
      <Toaster />
    </div>
  );
}

export default App;
