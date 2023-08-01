import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";

import {
  editProductImage,
  editProductInfo,
} from "../../../../../../store/slices/manageProducts/thunks";
import { toastError } from "../../../../../02-molecules/forAuthAndManage/customToasts";

import TitleSection from "../../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import ImageContainer from "../../../../../01-atoms/forAuthAndManage/ImageContainer";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";

import "../../styles.css";
import "./styles.css";
import FormEditImageProduct from "../../../../../02-molecules/forAuthAndManage/forms/products/FormEditImageProduct";
import FormEditInfoProduct from "../../../../../02-molecules/forAuthAndManage/forms/products/FormEditInfoProduct";
import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";

export default function ModalEditProduct({
  closeModal = () => {},
  openConfirmationModal = () => {},
  productId,
  currentImage = "",
  currentName = "",
  currentCategories = [],
  currentDescription = "",
  currentPrice = 0,
  currentStatus = 2,
}) {
  const dispatch = useDispatch();

  /*=====================GLOBAL STATE=============================*/
  const categoriesArr = useSelector((state) => {
    return state.categories?.categoriesList;
  });

  /*=====================LOCAL STATE=============================*/
  // for image
  const [image, setImage] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imgData, setImgData] = useState(null);

  // for multi-select
  const [selectedCategories, setSelectedCategories] = useState([]);

  // data validation for each field in edit product's info
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

  /*================================================================*/
  // DATA
  /*================================================================*/

  /*=====================IMAGE SOURCE CONTROLLER=============================*/

  const imgSource =
    image && imgData
      ? imgData
      : currentImage
      ? currentImage
      : "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690858516/products/default.png";

  /*=====================CURRENT CATEGORIES=============================*/
  const temp = [];
  currentCategories.map((category) => {
    temp.push(category);
  });
  const currentCategoriesString = temp.join(", ");

  /*================================================================*/
  //CHANGE PRODUCT'S IMAGE
  /*================================================================*/
  /*=====================UPLOAD=============================*/
  const uploadImageHandler = (e) => {
    e.preventDefault();
    setIsImageUploaded(true);
    console.log("selected photo was uploaded");
  };

  /*=====================CANCEL=============================*/
  const cancelUploadImage = () => {
    setImage(null);
    console.log("updating image was canceled");
  };

  /*=====================CHANGE=============================*/
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
          "Please upload a valid photo (.jpg, .jpeg, .png, .gif) with maximum size 1MB"
        );
      }
    }
  };

  /*=====================USE EFFECT TO DISPATCH=============================*/
  useEffect(() => {
    if (isImageUploaded) {
      const formData = new FormData();
      formData.append("file", image);
      console.log("dispatching editProductImage");

      dispatch(editProductImage(formData)).then(() => {
        setImage(null);
        setIsImageUploaded(false);
      });

      console.log("DISPATCHED: change product's image request");
    }
  }, [isImageUploaded]);

  /*================================================================*/
  //CHANGE PRODUCT'S INFO
  /*================================================================*/

  /*=====================SELECT CATEGORIES=============================*/
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

  /*=====================SUBMIT=============================*/
  const submitChangeInfoHandler = (e) => {
    e.preventDefault();

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
      !(invalidCategories && invalidDescription && invalidName && invalidPrice)
    ) {
      setAllValid(true);
    }
  };

  /*=====================CANCEL=============================*/
  const cancelEditInfoHandler = () => {
    setSelectedCategories([]);
    setInvalidName(false);
    setInvalidCategories(false);
    setInvalidDescription(false);
    setInvalidPrice(false);

    setAllValid(false);
  };

  /*=====================USE EFFECT TO DISPATCH=============================*/
  useEffect(() => {
    if (allValid) {
      dispatch(
        editProductInfo({
          productId,
          body: {
            name: nameRef.current?.value,
            description: descriptionRef.current?.value,
            price: priceRef.current?.value,
            categoryIdArr: selectedCategories,
          },
        })
      ).then(() => {
        console.log("DISPATCHED: edit product info");

        setSelectedCategories([]);
        setInvalidName(false);
        setInvalidCategories(false);
        setInvalidDescription(false);
        setInvalidPrice(false);

        setAllValid(false);
      });
    }
  }, [allValid]);

  /*================================================================*/
  //CHANGE PRODUCT'S STATUS
  /*================================================================*/
  //   const editStatusHandler = () => {
  //     const newStatus = currentStatus == 1 ? 2 : 1;
  //     dispatch(
  //       editProductStatus({ productId, body: { product_status_id: newStatus } })
  //     ).then(() => {
  //       window.location.reload();
  //     });
  //   };

  return (
    <div className="modal-background edit-product">
      <section className="modal edit-product d-flex-col">
        <TitleSection content="Edit Product" border="main" size="medium" />

        <div className="image">
          <ImageContainer
            imgSource={imgSource}
            shape="rectangle"
            id="product-image"
          />

          <FormEditImageProduct
            uploadImageHandler={uploadImageHandler}
            changeImageHandler={changeImageHandler}
            cancelUploadImage={cancelUploadImage}
            image={image}
          />
        </div>

        <div className="info">
          <FormEditInfoProduct
            currentName={currentName}
            currentDescription={currentDescription}
            currentPrice={currentPrice}
            currentCategories={currentCategoriesString}
            setSelectedCategories={setSelectedCategories}
            categoriesArr={categoriesArr}
            submitHandler={submitChangeInfoHandler}
            disableSave={allValid}
            selectCategoriesHandler={selectCategoriesHandler}
            nameRef={nameRef}
            descriptionRef={descriptionRef}
            priceRef={priceRef}
            invalidName={invalidName}
            invalidCategories={invalidCategories}
            invalidDescription={invalidDescription}
            invalidPrice={invalidPrice}
            cancelHandler={cancelEditInfoHandler}
          />
        </div>

        <div className="status">
          <InputText
            flexDirection="row"
            color="main"
            inputId="currentProductStatus"
            labelText="Status"
            inputName="currentProductStatus"
            defaultValue={currentStatus == 1 ? "Available" : "Unavailable"}
            readOnly={true}
          />
          <ButtonStandard
            id="edit-product-status"
            story="raised-warning"
            content={
              currentStatus == 1 ? "Set to unavailable" : "Set to available"
            }
            bold=""
            width="full"
            onClick={openConfirmationModal}
          />
        </div>

        <ButtonStandard
          id="close-edit-product-modal"
          story="flat"
          content="Back"
          bold=""
          width="full"
          onClick={closeModal}
        />
      </section>
    </div>
  );
}
