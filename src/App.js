/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { keepLogin, logout } from "../src/store/slices/auth/thunks";

import "./App.css";

import Header from "./components/03-organisms/forAuthAndManage/Header";
import ModalChangePhotoProfile from "./components/03-organisms/forAuthAndManage/modals/ModalChangePhotoProfile";

// PAGES
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

  const [profileMenu, showProfileMenu] = useState(false);
  const [reportsDropdown, showReportsDropdown] = useState(false);
  const [changePhotoModal, showChangePhotoModal] = useState(false);

  const { photo_profile, role_id } = useSelector((state) => {
    return state.auth?.user;
  });

  useEffect(() => {
    dispatch(keepLogin());
  }, [dispatch]);

  const toggleReportsDropdown = () => {
    showReportsDropdown(!reportsDropdown);
  };

  const toggleChangePhotoModal = () => {
    showChangePhotoModal(!changePhotoModal);
  };

  const closeChangePhotoModal = () => {
    showChangePhotoModal(false);
  };

  const toggleProfileMenu = () => {
    showProfileMenu(!profileMenu);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <Header
        roleId={role_id}
        userPhoto={photo_profile}
        toggleReportsDropdown={toggleReportsDropdown}
        reportsDropdown={reportsDropdown}
        profileMenu={profileMenu}
        toggleProfileMenu={toggleProfileMenu}
        toggleChangePhotoModal={toggleChangePhotoModal}
        logoutHandler={logoutHandler}
      />

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
          <Route
            path="/manage/reports/sales-reports"
            element={<SalesReports />}
          />
          <Route
            path="/manage/reports/product-sold"
            element={<ProductSold />}
          />
          <Route
            path="/manage/reports/sales-aggregates"
            element={<SalesAggregates />}
          />

          <Route
            path="/create-transactions"
            element={<CreateTransactions />}
          ></Route>
        </Routes>

        {changePhotoModal && (
          <ModalChangePhotoProfile closeModal={closeChangePhotoModal} />
        )}
      </main>
      <footer></footer>
      <Toaster />
    </div>
  );
}

export default App;
