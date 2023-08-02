import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import $ from "jquery";

import {
  editProductImage,
  editProductInfo,
  editProductStatus,
  deleteProductCategories,
} from "../../../../../../store/slices/manageProducts/thunks";
import { toastError } from "../../../../../02-molecules/forAuthAndManage/customToasts";

import TitleSection from "../../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import ImageContainer from "../../../../../01-atoms/forAuthAndManage/ImageContainer";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import FormEditImageProduct from "../../../../../02-molecules/forAuthAndManage/forms/products/FormEditImageProduct";
import FormEditInfoProduct from "../../../../../02-molecules/forAuthAndManage/forms/products/FormEditInfoProduct";
import InputText from "../../../../../01-atoms/forAuthAndManage/inputs/formInputs/InputText";
import ModalConfirmation from "../../ModalConfirmation";

import "../../styles.css";
import "./styles.css";

export default function ModalEditProduct({
  closeModal = () => {},
  productId,
  currentImage = "",
  currentName = "",
  currentCategories = [],
  currentDescription = "",
  currentPrice = 0,
  currentStatus = 1,
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

  const [changeCategories, setChangeCategories] = useState(false);

  // modal confirmation for edit product's status
  const [modalConfirmation, setModalConfirmation] = useState(false);

  const showModalConfirmation = () => {
    setModalConfirmation(true);
  };

  const closeModalConfirmation = () => {
    setModalConfirmation(false);
  };

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
    temp.push(category.name);
  });
  const currentCategoriesString = temp.join(", ");

  const currentCategoriesIdArr = [];
  currentCategories.map((category) => {
    currentCategoriesIdArr.push(category.id);
  });

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
          "Please upload a valid image (.jpg, .jpeg, .png, .gif) with maximum size 1MB"
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

      dispatch(editProductImage({ productId, body: formData })).then(() => {
        setImage(null);
        setIsImageUploaded(false);
        window.location.reload();
      });

      console.log("DISPATCHED: change product's image request");
    }
  }, [isImageUploaded]);

  /*================================================================*/
  //CHANGE PRODUCT'S INFO
  /*================================================================*/
  const disableSaveChangeInfo = false;

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

  /*=====================SUBMIT=============================*/
  const submitChangeInfoHandler = (e) => {
    e.preventDefault();

    let categoryIdArr = [];
    const name = $("#edit-product-name").val();
    const description = $("#edit-product-description").val();
    const price = parseInt($("#edit-product-price").val());

    if (changeCategories) {
      const selectedValues = $("#edit-product-categories").val();
      selectedValues.map((categoryId) => {
        categoryIdArr.push(parseInt(categoryId));
      });
    } else {
      categoryIdArr = currentCategoriesIdArr;
    }

    const dataValid = dataValidation(categoryIdArr, name, description, price);
    console.log("dataValid: ", dataValid);

    if (dataValid) {
      let data = {
        categoryIdArr:
          categoryIdArr === currentCategoriesIdArr ? [] : categoryIdArr,
        name: name === currentName ? "" : name,
        description: description === currentDescription ? "" : description,
        price: price === currentPrice ? 0 : price,
      };

      if (
        categoryIdArr === currentCategoriesIdArr &&
        name === currentName &&
        description === currentDescription &&
        price === currentPrice
      ) {
        toastError("No changes to be made");
      }

      if (categoryIdArr !== currentCategoriesIdArr) {
        // combine old categories and the new ones
        const unfilteredCategories = categoryIdArr.concat(
          currentCategoriesIdArr
        );

        // filter different categories to get what category/categories will be deleted
        const categoriesToDelete = unfilteredCategories.filter(function (obj) {
          return categoryIdArr.indexOf(obj) == -1;
        });

        // console.log({
        //   productId,
        //   body: { categoryIdArr: categoriesToDelete },
        // });
        if (categoriesToDelete.length !== 0) {
          dispatch(
            deleteProductCategories({
              productId,
              body: { categoryIdArr: categoriesToDelete },
            })
          ).then(() => {
            dispatch(editProductInfo({ productId, body: data })).then(() => {
              console.log("DISPATCHED: edit product info request");
              console.log({ productId, body: data });

              closeModal();
            });
          });
        } else {
          dispatch(editProductInfo({ productId, body: data })).then(() => {
            console.log("DISPATCHED: edit product info request");
            console.log({ productId, body: data });
            closeModal();
          });
        }
        // console.log(data);
      }
    }
  };

  /*=====================CANCEL=============================*/
  const cancelEditInfoHandler = () => {
    closeModal();
  };

  /*================================================================*/
  //CHANGE PRODUCT'S STATUS
  /*================================================================*/
  const editStatusHandler = () => {
    const newStatus = currentStatus == 1 ? 2 : 1;
    dispatch(
      editProductStatus({ productId, body: { product_status_id: newStatus } })
    ).then(() => {
      closeModal();
    });
  };

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
            categoriesArr={categoriesArr}
            changeCategories={changeCategories}
            setChangeCategories={setChangeCategories}
            submitHandler={submitChangeInfoHandler}
            disableSave={disableSaveChangeInfo}
            cancelHandler={cancelEditInfoHandler}
          />
        </div>

        <div className="status">
          <InputText
            flexDirection="row"
            color="main"
            inputId="current-product-status"
            labelText="Status"
            inputName="current-product-status"
            defaultValue={currentStatus === 1 ? "Available" : "Unavailable"}
            readOnly={true}
          />
          <div className="button-container">
            <ButtonStandard
              id="edit-product-status"
              story="raised-warning"
              content={
                currentStatus === 1 ? "Set to unavailable" : "Set to available"
              }
              bold=""
              width="full"
              onClick={showModalConfirmation}
            />
          </div>

          {modalConfirmation && (
            <ModalConfirmation
              type="warning"
              confirmationContent={
                "set product's status to " +
                (currentStatus === 1 ? "unavailable" : "available")
              }
              confirmationDetails="You can change it back again later"
              actionName={
                "Set to " + (currentStatus === 1 ? "unavailable" : "available")
              }
              cancelHandler={closeModalConfirmation}
              confirmHandler={editStatusHandler}
            />
          )}
        </div>

        <div className="button-container">
          <ButtonStandard
            id="close-edit-product-modal"
            story="flat"
            content="Back"
            bold=""
            width="full"
            onClick={closeModal}
          />
        </div>
      </section>
    </div>
  );
}
