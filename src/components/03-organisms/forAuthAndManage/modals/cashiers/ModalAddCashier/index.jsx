import { useDispatch } from "react-redux";
import { Formik } from "formik";

import { addCashierValidationSchema } from "../../../../../../validationSchemata";
import { addCashier } from "../../../../../../store/slices/manageCashiers/thunks";

import TitleSection from "../../../../../01-atoms/forAuthAndManage/texts/titles/TitleSection";
import FormAddCashier from "../../../../../02-molecules/forAuthAndManage/forms/cashiers/FormAddCashier";

import "../../styles.css";
import "./styles.css";

export default function ModalAddCashier({ closeModal = () => {} }) {
  const dispatch = useDispatch();

  return (
    <div className="modal-background add-cashier">
      <section className="modal add-cashier d-flex-col">
        <TitleSection content="Add Cashier" border="main" size="medium" />

        <Formik
          initialValues={{
            username: "",
            email: "",
          }}
          validationSchema={addCashierValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            try {
              dispatch(
                addCashier({
                  email: values.email,
                  username: values.username,
                })
              ).then(() => {
                window.location.reload();
              });

              console.log(`DISPATCHED: send add cashier request`);

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
            <FormAddCashier
              onSubmit={handleSubmit}
              handleBlur={handleBlur}
              handleChange={handleChange}
              isSubmitting={isSubmitting}
              emailTouched={touched.email}
              usernameTouched={touched.username}
              emailErrors={errors.email}
              usernameErrors={errors.username}
              emailValue={values.email}
              usernameValue={values.username}
              cancelHandler={closeModal}
              buttonCancelDisabled={false}
              buttonSubmitDisabled={
                !(values.email && values.username) || isSubmitting
              }
            />
          )}
        </Formik>
      </section>
    </div>
  );
}
