/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import "./App.css";

/* PAGES */
import { PageLogin } from "./components/05-pages/forAuthAndManage/PageLogin";
import { GeneralTest } from "./components/04-templates/forAuthAndManage/GeneralTest";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Routes>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/test" element={<GeneralTest />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
