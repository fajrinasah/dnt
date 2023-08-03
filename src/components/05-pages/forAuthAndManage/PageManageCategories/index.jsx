import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { getAllCategories } from "../../../../store/slices/manageCategories/thunks";
import { generateCategoriesQuery } from "../../../../helpers";

import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import ButtonStandard from "../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import TitleSection from "../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import ManageCategoriesToolbars from "../../../02-molecules/forAuthAndManage/toolbars/ManageCategoriesToolbars";
import TableCategories from "../../../03-organisms/forAuthAndManage/tables/TableCategories";
import ModalAddCategory from "../../../03-organisms/forAuthAndManage/modals/categories/ModalAddCategory";
import ModalEditNameCategory from "../../../03-organisms/forAuthAndManage/modals/categories/ModalEditNameCategory";

import "./styles.css";

export default function PageManageCategories() {
  const dispatch = useDispatch();

  /*=====================GLOBAL STATE=============================*/

  const { categoriesList } = useSelector((state) => {
    return state.categories;
  });

  /*=====================LOCAL STATE=============================*/
  const [currentQuery, setCurrentQuery] = useState(`?timesort=ASC`);
  const [modalAddCategory, setModalAddCategory] = useState(false);
  const [modalEditCategory, setModalEditCategory] = useState(false);

  const [currentCategoryId, setCurrentCategoryId] = useState("");
  const [currentCategoryName, setCurrentCategoryName] = useState("");

  const [currentSortingOption, setCurrentSortingOption] = useState("timesort");
  const [currentSortingMethod, setCurrentSortingMethod] = useState("ASC");
  const [currentSearch, setCurrentSearch] = useState("");

  /*=====================REFS=============================*/
  const refSortingOption = useRef();
  const refSearch = useRef();

  /*=====================USE EFFECT=============================*/

  useEffect(() => {
    dispatch(getAllCategories(currentQuery));
    console.log(`DISPATCHED: getAllCategories(${currentQuery})`);
  }, [currentQuery, dispatch]);

  /*===============INTERACTIVE FUNCTIONS================*/
  const openAddCategoryModal = () => {
    setModalAddCategory(true);
    document.querySelector(".modal-area.add-category").scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeAddCategoryModal = () => {
    setModalAddCategory(false);

    document.querySelector(".page.manage.categories").scrollIntoView({
      behavior: "instant",
    });
  };

  const openEditNameCategoryModal = ({ id, name }) => {
    setModalAddCategory(false);

    setCurrentCategoryId(id);
    setCurrentCategoryName(name);
    setModalEditCategory(true);

    document.querySelector(".headrow").scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeEditCategoryModal = () => {
    setModalEditCategory(false);

    document.querySelector(".table.categories").scrollIntoView({
      behavior: "instant",
    });
  };

  const toolbarHandler = () => {
    setCurrentSortingOption(refSortingOption.current?.value);
    setCurrentSearch(refSearch.current?.value);

    const query = generateCategoriesQuery({
      name: refSearch.current?.value,
      sortingOption: refSortingOption.current?.value,
      sortingMethod: currentSortingMethod,
    });

    setCurrentQuery(query);
    console.log("currentQuery: ", currentQuery);
  };

  const toolbarResetHandler = () => {
    setCurrentSortingOption("timesort");
    setCurrentSortingMethod("ASC");
    setCurrentSearch("");
    setCurrentQuery(`?timesort=ASC`);
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

  return (
    <div className="page manage categories d-flex-col">
      <TitlePage content="Manage Categories" />

      <ButtonStandard
        story="raised-accent"
        bold=""
        width="auto"
        content="Add new category"
        onClick={openAddCategoryModal}
        id="add-category"
      />
      <div className="modal-area add-category">
        {modalAddCategory && (
          <ModalAddCategory closeModal={closeAddCategoryModal} />
        )}
      </div>

      <TitleSection
        content="List of Categories"
        size="medium"
        border="accent"
      />
      <ManageCategoriesToolbars
        sortingOptions={sortingOptions}
        refSortingOption={refSortingOption}
        refSearch={refSearch}
        setCurrentSortingMethod={setCurrentSortingMethod}
        currentSortingMethod={currentSortingMethod}
        onSubmit={toolbarHandler}
        onReset={toolbarResetHandler}
      />

      <div className="table-container categories">
        <TableCategories
          categoriesArr={categoriesList}
          openEditNameCategoryModal={openEditNameCategoryModal}
        />
      </div>

      {modalEditCategory && (
        <ModalEditNameCategory
          closeModal={closeEditCategoryModal}
          categoryId={currentCategoryId}
          currentCategoryName={currentCategoryName}
        />
      )}
    </div>
  );
}
