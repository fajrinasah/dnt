import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useState } from "react";

import { categoryValidationSchema } from "../../../../../../validationSchemata";
import {
  editCategory,
  deleteCategory,
} from "../../../../../../store/slices/manageCategories/thunks";

import TitleSection from "../../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import FormEditNameCategory from "../../../../../02-molecules/forAuthAndManage/forms/categories/FormEditNameCategory";
import ButtonStandard from "../../../../../01-atoms/forAuthAndManage/buttons/ButtonStandard";
import ModalConfirmation from "../../ModalConfirmation";

import "../../styles.css";
import "./styles.css";

export default function ModalEditNameCategory({
  closeModal = () => {},
  categoryId,
  currentCategoryName,
}) {
  const dispatch = useDispatch();
  const [modalConfirmation, setModalConfirmation] = useState(false);

  const openModalConfirmation = () => {
    setModalConfirmation(true);
  };

  const closeModalConfirmation = () => {
    setModalConfirmation(false);
    document.querySelector(".title-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  const deleteCategoryHandler = () => {
    dispatch(deleteCategory(categoryId));
  };

  return (
    <div className="modal-background edit-category">
      <section className="modal edit-category d-flex-col">
        <TitleSection content="Edit Category" border="main" size="medium" />

        <Formik
          initialValues={{
            name: currentCategoryName,
          }}
          validationSchema={categoryValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            try {
              dispatch(
                editCategory({
                  categoryId,
                  body: { name: values.name },
                })
              ).then(() => {
                closeModal();
              });

              console.log(`DISPATCHED: send edit category request`);

              setSubmitting(false);
            } catch (error) {
              console.log("error", error?.message);
              return { message: error?.message };
            }
          }}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <FormEditNameCategory
              onSubmit={handleSubmit}
              handleBlur={handleBlur}
              handleChange={handleChange}
              disableSubmit={
                !values.name ||
                isSubmitting ||
                values.name === currentCategoryName
              }
              nameTouched={touched.name}
              nameErrors={errors.name}
              nameValue={values.name}
              cancelHandler={closeModal}
            />
          )}
        </Formik>

        <div className="buttons-container d-flex-col">
          <ButtonStandard
            story="raised-warning"
            content="Delete category"
            bold="bold"
            width="full"
            onClick={openModalConfirmation}
          />

          {modalConfirmation && (
            <ModalConfirmation
              type="warning"
              confirmationContent="delete this category"
              confirmationDetails="Once you delete a category, it will be deleted permanently. Products of this category will not be deleted, but this category name will be deleted from product's categories list."
              actionName="Delete"
              cancelHandler={closeModalConfirmation}
              confirmHandler={deleteCategoryHandler}
            />
          )}

          <ButtonStandard
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
