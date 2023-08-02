import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { categoryValidationSchema } from "../../../../../../validationSchemata";
import { addCategory } from "../../../../../../store/slices/manageCategories/thunks";

import TitleSection from "../../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import FormAddCategory from "../../../../../02-molecules/forAuthAndManage/forms/categories/FormAddCategory";

import "../../styles.css";
import "./styles.css";

export default function ModalAddCategory({ closeModal = () => {} }) {
  const dispatch = useDispatch();

  return (
    <div className="modal-background add-category">
      <section className="modal add-category d-flex-col">
        <TitleSection content="Add Category" border="main" size="medium" />

        <Formik
          initialValues={{
            name: "",
          }}
          validationSchema={categoryValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            try {
              dispatch(
                addCategory({
                  name: values.name,
                })
              ).then(() => {
                closeModal();
              });

              console.log(`DISPATCHED: send add category request`);

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
            <FormAddCategory
              onSubmit={handleSubmit}
              handleBlur={handleBlur}
              handleChange={handleChange}
              disableSubmit={!values.name || isSubmitting}
              nameTouched={touched.name}
              nameErrors={errors.name}
              nameValue={values.name}
              cancelHandler={closeModal}
            />
          )}
        </Formik>
      </section>
    </div>
  );
}
