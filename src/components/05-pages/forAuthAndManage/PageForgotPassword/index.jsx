/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useDispatch } from "react-redux";
import { Formik } from "formik";
// import { redirect } from "react-router";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { forgotPassword } from "../../../../store/slices/auth/thunks";
import { emailValidationSchema } from "../../../../validationSchemata";

import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import FormForgotPassword from "../../../02-molecules/forAuthAndManage/forms/auth/FormForgotPassword";

export default function PageForgotPassword() {
  const dispatch = useDispatch();

  return (
    <div className="page forgot-password d-flex-col">
      <TitlePage content="Forgot Password" />

      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={emailValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(
              forgotPassword({
                email: values.email,
                context: "reset password",
              })
            );

            console.log(`DISPATCHED: send forgot password request`);

            setSubmitting(false);

            // redirect to landing page (when landing page has been made)
            // redirect("/");
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
          <FormForgotPassword
            onSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            emailTouched={touched.email}
            emailErrors={errors.email}
            emailValue={values.email}
          />
        )}
      </Formik>
    </div>
  );
}
