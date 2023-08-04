import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import {
  getAllProducts,
  getProduct,
} from "../../../../store/slices/manageProducts/thunks";
import { getAllCategories } from "../../../../store/slices/manageCategories/thunks";
import { generateProductsQuery } from "../../../../helpers";

import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import ButtonStandard from "../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import TitleSection from "../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import ManageProductsToolbars from "../../../02-molecules/forAuthAndManage/toolbars/ManageProductsToolbars";
import TableProducts from "../../../03-organisms/forAuthAndManage/tables/TableProducts";
import ManageCashiersProductsPagination from "../../../02-molecules/forAuthAndManage/ManageCashiersProductsPagination";
import ModalAddProduct from "../../../03-organisms/forAuthAndManage/modals/products/ModalAddProduct";
import ModalEditProduct from "../../../03-organisms/forAuthAndManage/modals/products/ModalEditProduct";

import "./styles.css";

export default function PageManageProducts() {
  const dispatch = useDispatch();

  /*=====================GLOBAL STATE=============================*/

  const { page, total_pages, products } = useSelector((state) => {
    return state.products?.productsList;
  });

  const { categoriesList } = useSelector((state) => {
    return state.categories;
  });

  const { currentProduct } = useSelector((state) => {
    return state.products;
  });

  /*=====================LOCAL STATE=============================*/
  const [currentQuery, setCurrentQuery] = useState(`?timesort=ASC`);
  const [modalAddProduct, setModalAddProduct] = useState(false);
  const [modalEditProduct, setModalEditProduct] = useState(false);

  const [currentSelectedProduct, setCurrentSelectedProduct] = useState("");

  const [currentSortingOption, setCurrentSortingOption] = useState("timesort");
  const [currentSortingMethod, setCurrentSortingMethod] = useState("ASC");
  const [currentFilterStatus, setCurrentFilterStatus] = useState("");
  const [currentFilterCategory, setCurrentFilterCategory] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");

  /*=====================REFS=============================*/
  const refSortingOption = useRef();
  const refFilterStatusOption = useRef();
  const refFilterCategoryOption = useRef();
  const refSearch = useRef();

  /*=====================USE EFFECT=============================*/

  useEffect(() => {
    dispatch(getAllProducts(currentQuery));
    console.log(`DISPATCHED: getAllProducts(${currentQuery})`);
  }, [currentQuery]);

  useEffect(() => {
    if (currentSelectedProduct) {
      dispatch(getProduct(currentSelectedProduct)).then(() => {
        console.log(`DISPATCHED: getProduct(${currentSelectedProduct})`);

        setModalEditProduct(true);

        document.querySelector(".table.products").scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }, [currentSelectedProduct]);

  useEffect(() => {
    dispatch(getAllCategories("?namesort=ASC"));
  }, []);

  /*===============PAGINATION CONFIGURATIONS================*/
  const disabledPrevious = !page || page === "1";
  const disabledNext = page == total_pages;

  const onChangePagination = (page) => {
    if (page === "previous") {
      console.log(`DISPATCHED: getArticles(${currentQuery}&page=${page - 1})`);

      dispatch(getAllProducts(`${currentQuery}&page=${page - 1}`));
    } else if (page === "next") {
      console.log(`DISPATCHED: getArticles(${currentQuery}&page=${page + 1})`);

      dispatch(getAllProducts(`${currentQuery}&page=${page + 1}`));
    } else {
      console.log(`DISPATCHED: getArticles(${currentQuery}&page=${page})`);

      dispatch(getAllProducts(`${currentQuery}&page=${page}`));
    }

    document.querySelector(".table.products").scrollIntoView({
      behavior: "smooth",
    });
  };

  /*===============INTERACTIVE FUNCTIONS================*/
  const openAddProductModal = () => {
    setModalAddProduct(true);
    document.querySelector(".modal-add-product-container").scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeAddProductModal = () => {
    setModalAddProduct(false);

    document.querySelector(".page.manage.products").scrollIntoView({
      behavior: "instant",
    });
  };

  const openEditProductModal = (id) => {
    setCurrentSelectedProduct(id);
    console.log("id: ", id);

    document.querySelector(".table-container.products").scrollIntoView({
      behavior: "smooth",
    });
  };

  const closeEditProductModal = () => {
    setCurrentSelectedProduct("");
    setModalEditProduct(false);

    document.querySelector(".table.products").scrollIntoView({
      behavior: "instant",
    });
  };

  const toolbarHandler = () => {
    setCurrentSortingOption(refSortingOption.current?.value);
    setCurrentFilterStatus(refFilterStatusOption.current?.value);
    setCurrentFilterCategory(refFilterCategoryOption.current?.value);
    setCurrentSearch(refSearch.current?.value);

    const query = generateProductsQuery({
      status: refFilterStatusOption.current?.value,
      category: refFilterCategoryOption.current?.value,
      name: refSearch.current?.value,
      sortingOption: refSortingOption.current?.value,
      sortingMethod: currentSortingMethod,
    });

    setCurrentQuery(query);
  };

  const toolbarResetHandler = () => {
    setCurrentSortingOption("timesort");
    setCurrentSortingMethod("ASC");
    setCurrentFilterStatus("");
    setCurrentFilterCategory("");
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
      id: "pricesort",
      name: "Price",
      selected: currentSortingOption === "pricesort",
    },
    {
      id: "namesort",
      name: "Name",
      selected: currentSortingOption === "namesort",
    },
  ];

  const filterStatusOptions = [
    { id: "", name: "All", selected: currentFilterStatus === "" },
    { id: 1, name: "Available", selected: currentFilterStatus === "1" },
    { id: 2, name: "Unavailable", selected: currentFilterStatus === "2" },
  ];

  const filterCategoryOptions = [
    { id: "", name: "All", selected: currentFilterCategory === "" },
  ];
  categoriesList.map((category) => {
    filterCategoryOptions.push({
      id: category.id,
      name: category.name,
      selected: currentFilterCategory == category.id,
    });
  });

  return (
    <div className="page manage products d-flex-col">
      <TitlePage content="Manage Products" />

      <ButtonStandard
        story="raised-accent"
        bold=""
        width="auto"
        content="Add new product"
        onClick={openAddProductModal}
        id="add-product"
      />
      <div className="modal-add-product-container">
        {modalAddProduct && (
          <ModalAddProduct closeModal={closeAddProductModal} />
        )}
      </div>

      <TitleSection content="List of Products" size="medium" border="accent" />
      <ManageProductsToolbars
        sortingOptions={sortingOptions}
        refSortingOption={refSortingOption}
        filterStatusOptions={filterStatusOptions}
        refFilterStatusOption={refFilterStatusOption}
        filterCategoryOptions={filterCategoryOptions}
        refFilterCategoryOption={refFilterCategoryOption}
        refSearch={refSearch}
        onSubmit={toolbarHandler}
        onReset={toolbarResetHandler}
        setCurrentSortingMethod={setCurrentSortingMethod}
        currentSortingMethod={currentSortingMethod}
      />

      <div className="table-container products">
        <TableProducts
          productsArr={products}
          openEditProductModal={openEditProductModal}
        />
      </div>

      {modalEditProduct && (
        <ModalEditProduct
          closeModal={closeEditProductModal}
          productId={currentProduct.id}
          currentImage={currentProduct.image}
          currentName={currentProduct.name}
          currentCategories={currentProduct.categories}
          currentDescription={currentProduct.description}
          currentPrice={currentProduct.price}
          currentStatus={currentProduct.product_status_id}
        />
      )}

      <ManageCashiersProductsPagination
        totalPage={total_pages}
        disabledNext={disabledNext}
        disabledPrevious={disabledPrevious}
        onChangePagination={onChangePagination}
      />
    </div>
  );
}
