import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState } from "react";
import $ from "jquery";

import { addProduct } from "../../../../../../store/slices/manageProducts/thunks";

import TitleSection from "../../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import ImageContainer from "../../../../../01-atoms/forAuthAndManage/ImageContainer";
import FormAddProduct from "../../../../../02-molecules/forAuthAndManage/forms/products/FormAddProduct";
import { toastError } from "../../../../../02-molecules/forAuthAndManage/customToasts";

import "../../styles.css";
import "./styles.css";

export default function ModalAddProduct({ closeModal = () => {} }) {
  const dispatch = useDispatch();

  /*=====================GLOBAL STATE=============================*/
  const categoriesArr = useSelector((state) => {
    return state.categories?.categoriesList;
  });

  /*=====================LOCAL STATE=============================*/
  // for image
  const [image, setImage] = useState(null);
  const [imgData, setImgData] = useState(null);

  /*=====================DISABLE SAVE=============================*/
  const disableSave = false;

  /*-----------------------DATA VALIDATION------------------------*/
  const dataValidation = (categoryIdArr, name, description, price) => {
    if (!name || name.length < 3 || name.length > 45) {
      toastError(
        "Product's name is required and its length must be between 3 to 45 characters."
      );
    }

    if (categoryIdArr.length === 0) {
      toastError("Product's category/categories data is required.");
    }

    if (!description || description.length < 10 || description.length > 255) {
      toastError(
        "Product's description is required and its length must be between 10 to 255 characters."
      );
    }

    if (!price) {
      toastError("Product's price is required.");
    }

    return true;
  };

  /*=====================CHANGE PHOTO=============================*/
  const changeImageHandler = (e) => {
    const selectedImage = e.target.files[0];

    // validate extension and size
    if (selectedImage) {
      const { type, size } = selectedImage;
      const allowedExtensions = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/JPG",
        "image/JPEG",
        "image/PNG",
        "image/GIF",
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
      ];
      const maxSize = 1000000; // 1MB

      if (allowedExtensions.includes(type) && size <= maxSize) {
        setImage(selectedImage);
        console.log("selected image is valid");

        // show preview of chosen image
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      } else {
        setImage(null);
        e.target.value = null;
        console.log("selected image is invalid");
        toastError(
          "Product's image is required. Please upload a valid image (.jpg, .jpeg, .png, .gif) with maximum size 1MB."
        );
      }
    }
  };

  /*=====================SUBMIT FORM DATA=============================*/
  const submitHandler = (e) => {
    e.preventDefault();

    const selectedValues = $("#categories").val();
    const categoryIdArr = [];
    selectedValues.map((categoryId) => {
      categoryIdArr.push(parseInt(categoryId));
    });

    const name = $("#product-name").val();
    const description = $("#description").val();
    const price = $("#price").val();

    const dataValid = dataValidation(categoryIdArr, name, description, price);
    console.log("dataValid: ", dataValid);

    if (image && dataValid) {
      const data = {
        name,
        description,
        price,
        categoryIdArr,
      };

      console.log("data: ", data);

      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("file", image);

      console.log(formData);
      dispatch(addProduct(formData)).then(() => {
        console.log("DISPATCHED: add product request");

        setImage(null);
        setImgData(null);
        closeModal();
      });
    }
  };

  /*=====================CANCEL=============================*/
  const cancelHandler = () => {
    setImage(null);
    setImgData(null);

    closeModal();
  };

  /*=====================IMAGE SOURCE CONTROLLER=============================*/

  const imgSource =
    image && imgData
      ? imgData
      : "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690858516/products/default.png";

  return (
    <div className="modal-background add-product">
      <section className="modal add-product d-flex-col">
        <TitleSection content="Add Product" border="main" size="medium" />

        <ImageContainer
          imgSource={imgSource}
          shape="rectangle"
          id="product-image"
        />

        <FormAddProduct
          categoriesArr={categoriesArr}
          submitHandler={submitHandler}
          changeImageHandler={changeImageHandler}
          disableSave={disableSave}
          cancelHandler={cancelHandler}
        />
      </section>
    </div>
  );
}
