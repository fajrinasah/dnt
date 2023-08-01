import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import { addProduct } from "../../../../../../store/slices/manageProducts/thunks";

import TitleSection from "../../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import ImageContainer from "../../../../../01-atoms/forAuthAndManage/ImageContainer";

import FormAddProduct from "../../../../../02-molecules/forAuthAndManage/forms/products/FormAddProduct";

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
  //   const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imgData, setImgData] = useState(null);

  // for multi-select
  const [selectedCategories, setSelectedCategories] = useState([]);

  // data validation for each field
  const [invalidImage, setInvalidImage] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidCategories, setInvalidCategories] = useState(false);
  const [invalidDescription, setInvalidDescription] = useState(false);
  const [invalidPrice, setInvalidPrice] = useState(false);

  const [allValid, setAllValid] = useState(false);

  /*=====================REFS=============================*/
  //   const categoriesRef = useRef();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

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
        setInvalidImage(true);
      }
    }
  };

  /*=====================SUBMIT FORM DATA=============================*/
  const submitHandler = (e) => {
    e.preventDefault();

    // // for image
    // setIsImageUploaded(true);
    // console.log("selected image was uploaded");

    /*-----------------------DATA VALIDATION------------------------*/
    if (
      !nameRef.current?.value ||
      nameRef.current?.value.length < 3 ||
      nameRef.current?.value.length > 45
    ) {
      setInvalidName(true);
    }

    if (!selectedCategories.current?.value) {
      setInvalidCategories(true);
    }

    if (
      !descriptionRef.current?.value ||
      descriptionRef.current?.value.length < 10 ||
      descriptionRef.current?.value.length > 255
    ) {
      setInvalidDescription(true);
    }

    if (!priceRef.current?.value) {
      setInvalidPrice(true);
    }

    if (
      !(
        invalidCategories &&
        invalidDescription &&
        invalidImage &&
        invalidName & invalidPrice
      )
    ) {
      setAllValid(true);
    }
  };

  /*=====================CANCEL=============================*/
  const cancelHandler = () => {
    setImage(null);
    setImgData(null);
    setSelectedCategories([]);

    setInvalidImage(false);
    setInvalidName(false);
    setInvalidCategories(false);
    setInvalidDescription(false);
    setInvalidPrice(false);

    setAllValid(false);

    closeModal();
  };

  /*=====================IMAGE SOURCE CONTROLLER=============================*/

  const imgSource =
    image && imgData
      ? imgData
      : "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690858516/products/default.png";

  /*=====================INTERACTIVE FUNCTIONS=============================*/
  const selectCategoriesHandler = (e) => {
    // get selected options
    const options = e.target.options;

    // convert to array and filter unselected options
    const selectedOptions = Array.from(options).filter(
      (option) => option.selected
    );

    // map the selected options to their values
    const selectedValues = selectedOptions.map((option) => option.value);

    // update the state with the new values
    setSelectedCategories(selectedValues);
  };

  /*=====================USE EFFECT TO DISPATCH=============================*/
  useEffect(() => {
    if (allValid) {
      const data = {
        name: nameRef.current?.value,
        description: descriptionRef.current?.value,
        price: priceRef.current?.value,
        categoryIdArr: [selectedCategories],
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("file", image);

      console.log(formData);
      dispatch(addProduct(formData)).then(() => {
        console.log("DISPATCHED: add product request");

        setImage(null);
        setImgData(null);
        setSelectedCategories([]);

        setInvalidImage(false);
        setInvalidName(false);
        setInvalidCategories(false);
        setInvalidDescription(false);
        setInvalidPrice(false);

        setAllValid(false);
      });
    }
  }, [allValid]);

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
          disableSave={!allValid}
          selectCategoriesHandler={selectCategoriesHandler}
          //   categoriesRef={categoriesRef}
          nameRef={nameRef}
          descriptionRef={descriptionRef}
          priceRef={priceRef}
          invalidImage={invalidImage}
          //   invalidImageInfo={invalidImageInfo}
          invalidName={invalidName}
          //   invalidNameInfo={invalidNameInfo}
          invalidCategories={invalidCategories}
          //   invalidCategoriesInfo={invalidCategoriesInfo}
          invalidDescription={invalidDescription}
          //   invalidDescriptionInfo={invalidDescriptionInfo}
          invalidPrice={invalidPrice}
          //   invalidPriceInfo={invalidPriceInfo}
          cancelHandler={cancelHandler}
        />
      </section>
    </div>
  );
}
