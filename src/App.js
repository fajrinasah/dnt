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
import { PageLogin } from "./components/05-pages/forAuthAndManage/PageLogin";
import { PageForgotPassword } from "./components/05-pages/forAuthAndManage/PageForgotPassword";
import { GeneralTest } from "./components/04-templates/forAuthAndManage/GeneralTest";

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
          <Route path="/login" element={<PageLogin />} />
          <Route path="/forgot-password" element={<PageForgotPassword />} />
          <Route path="/test" element={<GeneralTest />} />
        </Routes>
      </main>
      <footer></footer>
      <Toaster />
    </div>
  );
}

export default App;
