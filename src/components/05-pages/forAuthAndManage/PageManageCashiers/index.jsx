import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { getAllCashiers } from "../../../../store/slices/manageCashiers/thunks";
import { generateCashiersQuery } from "../../../../helpers";

import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import ButtonStandard from "../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import TitleSection from "../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import ManageCashiersProductsToolbars from "../../../02-molecules/forAuthAndManage/toolbars/ManageCashiersProductsToolbars";
import TableCashiers from "../../../03-organisms/forAuthAndManage/tables/TableCashiers";
import ManageCashiersProductsPagination from "../../../02-molecules/forAuthAndManage/ManageCashiersProductsPagination";
import ModalAddCashier from "../../../03-organisms/forAuthAndManage/modals/cashiers/ModalAddCashier";
import ModalEditCashier from "../../../03-organisms/forAuthAndManage/modals/cashiers/ModalEditCashier";

import "./styles.css";

export default function PageManageCashiers() {
  const dispatch = useDispatch();

  /*=====================GLOBAL STATE=============================*/

  const { page, total_pages, cashiers } = useSelector((state) => {
    return state.cashiers?.cashiersList;
  });

  /*=====================LOCAL STATE=============================*/
  const [currentQuery, setCurrentQuery] = useState(`?timesort=ASC`);
  const [modalAddCashier, setModalAddCashier] = useState(false);
  const [modalEditCashier, setModalEditCashier] = useState(false);

  const [cashierPhoto, setCashierPhoto] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [cashierUsername, setCashierUsername] = useState("");
  const [cashierCurrentEmail, setCashierCurrentEmail] = useState("");
  const [cashierStatus, setCashierStatus] = useState("");

  const [currentSortingOption, setCurrentSortingOption] = useState("timesort");
  const [currentSortingMethod, setCurrentSortingMethod] = useState("ASC");
  const [currentFilter, setCurrentFilter] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");

  /*=====================REFS=============================*/
  const refSortingOption = useRef();
  const refFilterOption = useRef();
  const refSearch = useRef();

  /*=====================USE EFFECT=============================*/

  useEffect(() => {
    dispatch(getAllCashiers(currentQuery));
    console.log(`DISPATCHED: getAllCashiers(${currentQuery})`);
  }, [currentQuery]);

  /*===============PAGINATION CONFIGURATIONS================*/

  const disabledPrevious = page === 1;
  const disabledNext = page >= total_pages;

  const onChangePagination = (page) => {
    if (page === "previous") {
      console.log(`DISPATCHED: getArticles(${currentQuery}&page=${page - 1})`);

      dispatch(getAllCashiers(`${currentQuery}&page=${page - 1}`));
    } else if (page === "next") {
      console.log(`DISPATCHED: getArticles(${currentQuery}&page=${page + 1})`);

      dispatch(getAllCashiers(`${currentQuery}&page=${page + 1}`));
    } else {
      console.log(`DISPATCHED: getArticles(${currentQuery}&page=${page})`);

      dispatch(getAllCashiers(`${currentQuery}&page=${page}`));
    }

    document.querySelector(".table.cashiers").scrollIntoView({
      behavior: "smooth",
    });
  };

  /*===============INTERACTIVE FUNCTIONS================*/
  const openAddCashierModal = () => {
    setModalAddCashier(true);
  };

  const closeAddCashierModal = () => {
    setModalAddCashier(false);
  };

  const openEditCashierModal = ({
    cashierPhoto = "",
    joinedDate = "",
    cashierUsername = "",
    cashierCurrentEmail = "",
    cashierStatus = "",
  }) => {
    setCashierCurrentEmail(cashierCurrentEmail);
    setCashierPhoto(cashierPhoto);
    setCashierStatus(cashierStatus);
    setCashierUsername(cashierUsername);
    setJoinedDate(joinedDate);

    setModalEditCashier(true);

    document.querySelector(".table-container.cashiers").scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeEditCashierModal = () => {
    setModalEditCashier(false);
  };

  const toolbarHandler = () => {
    setCurrentSortingOption(refSortingOption.current?.value);
    setCurrentFilter(refFilterOption.current?.value);
    setCurrentSearch(refSearch.current?.value);

    const query = generateCashiersQuery({
      status: refFilterOption?.current?.value,
      username: refSearch?.current?.value,
      sortingOption: refSortingOption?.current?.value,
      sortingMethod: currentSortingMethod,
    });

    setCurrentQuery(query);
  };

  const toolbarResetHandler = () => {
    setCurrentSortingOption("timesort");
    setCurrentSortingMethod("ASC");
    setCurrentFilter("");
    setCurrentSearch("");
  };

  /*===============DATA ARRAYS================*/
  const sortingOptions = [
    {
      id: "timesort",
      name: "Time",
      selected: currentSortingOption === "timesort",
    },
    {
      id: "namesort",
      name: "Name",
      selected: currentSortingOption === "namesort",
    },
  ];

  const filterOptions = [
    { id: 0, name: "All", selected: currentFilter === "0" },
    { id: 1, name: "Unverified", selected: currentFilter === "1" },
    { id: 2, name: "Active", selected: currentFilter === "2" },
    { id: 3, name: "Inactive", selected: currentFilter === "3" },
  ];

  return (
    <div className="page manage cashiers d-flex-col">
      <TitlePage content="Manage Cashiers" />

      <ButtonStandard
        story="raised-accent"
        bold=""
        width="auto"
        content="Add new cashier"
        onClick={openAddCashierModal}
        id="add-cashier"
      />
      {modalAddCashier && <ModalAddCashier closeModal={closeAddCashierModal} />}

      <TitleSection content="List of Cashiers" size="medium" border="accent" />
      <ManageCashiersProductsToolbars
        type="cashiers"
        sortingOptions={sortingOptions}
        refSortingOption={refSortingOption}
        filterOptions={filterOptions}
        refFilterOption={refFilterOption}
        refSearch={refSearch}
        onSubmit={toolbarHandler}
        onReset={toolbarResetHandler}
        setCurrentSortingMethod={setCurrentSortingMethod}
        currentSortingMethod={currentSortingMethod}
      />

      <div className="table-container cashiers">
        <TableCashiers
          cashiersArr={cashiers}
          openEditCashierModal={openEditCashierModal}
        />
      </div>

      {modalEditCashier && (
        <ModalEditCashier
          closeModal={closeEditCashierModal}
          cashierPhoto={cashierPhoto}
          joinedDate={joinedDate}
          cashierUsername={cashierUsername}
          cashierCurrentEmail={cashierCurrentEmail}
          cashierStatus={cashierStatus}
        />
      )}

      <ManageCashiersProductsPagination
        totalPage={total_pages}
        disabledPrevious={disabledPrevious}
        disabledNext={disabledNext}
        onChangePagination={onChangePagination}
      />
    </div>
  );
}
