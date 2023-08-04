/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { keepLogin, logout } from "../src/store/slices/auth/thunks";

import GeneralProtectedRoute from "./helpers/general.protected.routes";
import AdminProtectedRoute from "./helpers/admin.protected.routes";
import CashierProtectedRoute from "./helpers/cashier.protected.routes";
import Header from "./components/03-organisms/forAuthAndManage/Header";
import ModalChangePhotoProfile from "./components/03-organisms/forAuthAndManage/modals/ModalChangePhotoProfile";

// PAGES
import PageLogin from "./components/05-pages/forAuthAndManage/PageLogin";
import PageForgotPassword from "./components/05-pages/forAuthAndManage/PageForgotPassword";
import PageTokenVerification from "./components/05-pages/forAuthAndManage/PageTokenVerification";
import PageResetPassword from "./components/05-pages/forAuthAndManage/PageResetPassword";

import PageManageCashiers from "./components/05-pages/forAuthAndManage/PageManageCashiers";
import PageManageProducts from "./components/05-pages/forAuthAndManage/PageManageProducts";
import PageManageCategories from "./components/05-pages/forAuthAndManage/PageManageCategories";

import CreateTransactions from "./components/05-pages/CreateTransactions";
import SalesReports from "./components/05-pages/Reports/SalesReports";
import ProductSold from "./components/05-pages/Reports/ProductSold";
import SalesAggregates from "./components/05-pages/Reports/SalesAggregates";

import PageNotFound from "./components/05-pages/forAuthAndManage/PageNotFound";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const [profileMenu, showProfileMenu] = useState(false);
  const [reportsDropdown, showReportsDropdown] = useState(false);
  const [changePhotoModal, showChangePhotoModal] = useState(false);

  const { username, photo_profile, role_id } = useSelector((state) => {
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
    return <Navigate to="/auth/login" replace />;
  };

  return (
    <div className="App">
      <Header
        username={username}
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
          <Route path="/auth/login" element={<PageLogin />} />
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

          <Route
            path="/manage/cashiers"
            element={
              <GeneralProtectedRoute>
                <AdminProtectedRoute>
                  <PageManageCashiers />
                </AdminProtectedRoute>
              </GeneralProtectedRoute>
            }
          />
          <Route
            path="/manage/products"
            element={
              <GeneralProtectedRoute>
                <AdminProtectedRoute>
                  <PageManageProducts />
                </AdminProtectedRoute>
              </GeneralProtectedRoute>
            }
          />
          <Route
            path="/manage/categories"
            element={
              <GeneralProtectedRoute>
                <AdminProtectedRoute>
                  <PageManageCategories />
                </AdminProtectedRoute>
              </GeneralProtectedRoute>
            }
          />
          <Route
            path="/manage/reports/sales-reports"
            element={
              <GeneralProtectedRoute>
                <AdminProtectedRoute>
                  <SalesReports />
                </AdminProtectedRoute>
              </GeneralProtectedRoute>
            }
          />
          <Route
            path="/manage/reports/product-sold"
            element={
              <GeneralProtectedRoute>
                <AdminProtectedRoute>
                  <ProductSold />
                </AdminProtectedRoute>
              </GeneralProtectedRoute>
            }
          />
          <Route
            path="/manage/reports/sales-aggregates"
            element={
              <GeneralProtectedRoute>
                <AdminProtectedRoute>
                  <SalesAggregates />
                </AdminProtectedRoute>
              </GeneralProtectedRoute>
            }
          />

          <Route
            path="/create-transactions"
            element={
              <GeneralProtectedRoute>
                <CashierProtectedRoute>
                  <CreateTransactions />
                </CashierProtectedRoute>
              </GeneralProtectedRoute>
            }
          ></Route>

          <Route path="*" element={<PageNotFound />}></Route>
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
