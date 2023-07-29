/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Formik } from "formik";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import {} from "../../../../store/slices/auth/thunks";
import { loginValidationSchema } from "../../../../validationSchemata";

import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import FormLogin from "../../../02-molecules/forAuthAndManage/forms/auth/FormLogin";
import "./styles.css";

export function PageLogin() {
  const dispatch = useDispatch();

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

  // redirect to landing page when user logged in
  // const currentUsername = useSelector((state) => {
  //   return state.auth?.username;
  // });
  // if (currentUsername) return <Navigate to="/" replace />;

  return (
    <div>
      <TitlePage content="Login" />
      <Formik
        initialValues={{
          data: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(
              login({
                data: values.data,
                password: values.password,
              })
            );
            console.log(`CLICKED: send login request`);
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
          <FormLogin
            onSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            helpClicked={helpClicked}
            showClicked={togglePassword}
            touched={touched}
            errors={errors}
            dataValue={values.data}
            passwordValue={values.password}
            passwordIsShown={passwordIsShown}
          />
        )}
      </Formik>
    </div>
  );
}
