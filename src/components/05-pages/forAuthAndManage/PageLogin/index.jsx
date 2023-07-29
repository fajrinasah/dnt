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
import { login } from "../../../../store/slices/auth/thunks";
import { loginValidationSchema } from "../../../../validationSchemata";
import { hash, encrypt } from "../../../../../src/helpers";

import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import FormLogin from "../../../02-molecules/forAuthAndManage/forms/auth/FormLogin";
import "../../../02-molecules/forAuthAndManage/forms/auth/FormLogin/styles.css";
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
  const currentUsername = useSelector((state) => {
    return state.auth?.user?.username;
  });
  if (currentUsername) return <Navigate to="/" replace />;

  return (
    <div className="page login d-flex-col">
      <TitlePage content="Login" />

      <Formik
        initialValues={{
          data: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            // hash & aes encryptions
            const hashed = hash(values.password);
            const cipher = encrypt(hashed);

            dispatch(
              login({
                data: values.data,
                password: cipher,
              })
            );

            console.log(`DISPATCHED: send login request`);

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
            dataTouched={touched.data}
            passwordTouched={errors.password}
            dataErrors={errors.data}
            passwordErrors={errors.password}
            dataValue={values.data}
            passwordValue={values.password}
            guidesIsShown={guidesIsShown}
            passwordIsShown={passwordIsShown}
          />

          // <form onSubmit={handleSubmit} className="form login d-flex-col">
          //   <InputText
          //     flexDirection="col"
          //     color="accent"
          //     inputId="data"
          //     labelText="Username/email"
          //     // required={false}
          //     inputName="data"
          //     inputPlaceholder="enter your username or email here"
          //     value={values.data}
          //     onBlur={handleBlur}
          //     onChange={handleChange}
          //   />

          //   {touched.data && errors.data && toastError(errors.data)}

          //   <InputPassword
          //     flexDirection="column"
          //     color="accent"
          //     inputId="password"
          //     inputName="password"
          //     labelText="Password"
          //     helpClicked={helpClicked}
          //     showClicked={togglePassword}
          //     // required={false}
          //     guidesIsShown={guidesIsShown}
          //     passwordIsShown={passwordIsShown}
          //     value={values.password}
          //     onBlur={handleBlur}
          //     onChange={handleChange}
          //   />

          //   {touched.password && errors.password && toastError(errors.password)}

          //   <div className="input-submit-container d-flex-row">
          //     <InputSubmit value="Login" disabled={isSubmitting} width="auto" />
          //   </div>
          // </form>
        )}
      </Formik>

      <div className="nav-to-reset-password-page d-flex-row">
        <Link to="/forgot-password" className="link-to-reset-password-page">
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
