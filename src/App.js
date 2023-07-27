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
import { PageLogin, CreateTransactions } from "./components/05-pages";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Routes>
          <Route path="/login" element={<PageLogin />} /><Route />
          <Route path="/create-transactions" element={<CreateTransactions />}></Route>
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
