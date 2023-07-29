/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useState } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import { Formik } from "formik";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { resetPassword } from "../../../../store/slices/auth/thunks";
import { resetPasswordValidationSchema } from "../../../../validationSchemata";
import {
  hash,
  encrypt,
  useGetContext,
  useGetUuidWithContext,
} from "../../../../../src/helpers";

import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import FormResetPassword from "../../../02-molecules/forAuthAndManage/forms/auth/FormResetPassword";

import "./styles.css";

export default function PageResetPassword() {
  const dispatch = useDispatch();
  const uuidWithContext = useGetUuidWithContext();
  const context = useGetContext();

  /*---------------Show Password Guides Toggle-------------*/
  const [guidesIsShown, setGuidesIsShown] = useState(false);

  const helpClicked = () => {
    setGuidesIsShown((guidesIsShown) => !guidesIsShown);
  };

  /*--------------Show Password Toggle--------------*/

  const [passwordIsShown, setPasswordIsShown] = useState(false);

  const togglePassword = () => {
    setPasswordIsShown((passwordIsShown) => !passwordIsShown);
  };

  const [confirmPasswordIsShown, setConfirmPasswordIsShown] = useState(false);

  const toggleConfirmPassword = () => {
    setConfirmPasswordIsShown(
      (confirmPasswordIsShown) => !confirmPasswordIsShown
    );
  };

  return (
    <div className="page reset-password d-flex-col">
      {context === "act" ? (
        <TitlePage content="Save Password" />
      ) : (
        <TitlePage content="Reset Password" />
      )}

      {context === "act" && (
        <div className="welcome d-flex-col">
          <p>Welcome aboard! Glad to have you joined our team.</p>
          <p>Please input a password for your account.</p>
        </div>
      )}

      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={resetPasswordValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            // hash & aes encryptions
            const hashed = hash(values.password);
            const cipher = encrypt(hashed);

            dispatch(
              resetPassword({ uuidWithContext, body: { password: cipher } })
            );

            console.log(`DISPATCHED: reset password request`);

            setSubmitting(false);

            // redirect to login page
            redirect("/auth/login");
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
          <FormResetPassword
            type={context}
            onSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            helpClicked={helpClicked}
            showClicked={togglePassword}
            confirmShowClicked={toggleConfirmPassword}
            passwordTouched={touched.password}
            passwordErrors={errors.password}
            passwordValue={values.password}
            confirmPasswordTouched={touched.confirmPassword}
            confirmPasswordErrors={errors.confirmPassword}
            confirmPasswordValue={values.confirmPassword}
            guidesIsShown={guidesIsShown}
            passwordIsShown={passwordIsShown}
            confirmPasswordIsShown={confirmPasswordIsShown}
          />
        )}
      </Formik>
    </div>
  );
}
