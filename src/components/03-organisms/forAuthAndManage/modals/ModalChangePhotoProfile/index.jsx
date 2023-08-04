import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import TitleSection from "../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import ImageContainer from "../../../../01-atoms/forAuthAndManage/ImageContainer";
import FormChangePhotoProfile from "../../../../02-molecules/forAuthAndManage/forms/auth/FormChangePhotoProfile";
import ButtonStandard from "../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import { toastError } from "../../../../02-molecules/forAuthAndManage/customToasts";
import { changePhotoProfile } from "../../../../../store/slices/auth/thunks";

import "../styles.css";
import "./styles.css";

export default function ModalChangePhotoProfile({ closeModal = () => {} }) {
  const dispatch = useDispatch();

  /*=====================GLOBAL STATE=============================*/
  const photoProfile = useSelector((state) => {
    return state.auth?.user?.photo_profile;
  });

  /*=====================LOCAL STATE=============================*/
  const [photo, setPhoto] = useState(null);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const [imgData, setImgData] = useState(null);

  /*=====================CHANGE PHOTO=============================*/
  const changePhotoHandler = (e) => {
    const selectedPhoto = e.target.files[0];

    // validate extension and size
    if (selectedPhoto) {
      const { type, size } = selectedPhoto;
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
        setPhoto(selectedPhoto);
        console.log("selected photo is valid");

        // show preview of chosen photo
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      } else {
        setPhoto(null);
        e.target.value = null;
        console.log("selected photo is invalid");
        toastError(
          "Please upload a valid photo (.jpg, .jpeg, .png, .gif) with maximum size 1MB"
        );
      }
    }
  };

  /*=====================UPLOAD PHOTO=============================*/
  const uploadPhotoHandler = (e) => {
    e.preventDefault();
    setIsPhotoUploaded(true);
    console.log("selected photo was uploaded");
  };

  /*=====================CANCEL=============================*/
  const cancelUploadPhoto = () => {
    setPhoto(null);
    console.log("updating photo was canceled");
  };

  /*=====================IMAGE SOURCE CONTROLLER=============================*/

  const imgSource =
    photo && imgData
      ? imgData
      : photoProfile
      ? photoProfile
      : "https://res.cloudinary.com/dpdgmr3xw/image/upload/v1690682252/users/default.png";

  /*=====================USE EFFECT TO DISPATCH=============================*/
  useEffect(() => {
    if (isPhotoUploaded) {
      const formData = new FormData();
      formData.append("file", photo);
      console.log("dispatching changePhotoProfile");

      dispatch(changePhotoProfile(formData)).then(() => {
        setPhoto(null);
        setIsPhotoUploaded(false);
      });

      console.log("DISPATCHED: change photo profile request");
    }
  }, [isPhotoUploaded]);

  return (
    <div className="modal-background change-photo-profile">
      <section className="modal change-photo-profile d-flex-col">
        <TitleSection
          size="medium"
          content="Change Photo Profile"
          border="main"
        />

        <ImageContainer
          imgSource={imgSource}
          shape="circle"
          id="photo-profile"
        />

        <FormChangePhotoProfile
          uploadPhotoHandler={uploadPhotoHandler}
          changePhotoHandler={changePhotoHandler}
          disabled={!photo}
        />

        <ButtonStandard
          id="button-cancel-upload"
          story="flat"
          content="Cancel upload"
          bold=""
          width="full"
          onClick={cancelUploadPhoto}
          disabled={!photo}
        />

        <ButtonStandard
          id="button-close-change-photo"
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
