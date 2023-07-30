/*-------------------------------------------------*/
// IMPORT FROM DEPENDENCIES
/*-------------------------------------------------*/
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { Navigate, redirect } from "react-router";

/*-------------------------------------------------*/
// IMPORT FROM PROJECT'S FILES
/*-------------------------------------------------*/
import { verifyOtpToken } from "../../../../store/slices/auth/thunks";
import { otpTokenValidationSchema } from "../../../../validationSchemata";
import { useGetUuidWithContext } from "../../../../helpers";

import TitlePage from "../../../01-atoms/forAuthAndManage/texts/titles/TitlePage";
import FormVerifyOtp from "../../../02-molecules/forAuthAndManage/forms/auth/FormVerifyOtp";

export default function PageTokenVerification() {
  const dispatch = useDispatch();

  const uuidWithContext = useGetUuidWithContext();

  return (
    <div className="page verify d-flex-col">
      <TitlePage content="Verify OTP Token" />

      <Formik
        initialValues={{
          token: "",
        }}
        validationSchema={otpTokenValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          try {
            dispatch(
              verifyOtpToken({
                uuidWithContext,
                body: { token: values.token },
              })
            );

            console.log({
              uuidWithContext,
              token: values.token,
            });
            console.log(`DISPATCHED: send verify otp token request`);

            setSubmitting(false);

            // redirect to reset password page
            // redirect(`/auth/reset-password/${uuidWithContext}`);
            // redirect("/auth/forgot-password");
            <Navigate
              to={`/auth/reset-password/${uuidWithContext}`}
              replace={true}
            />;
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
          <FormVerifyOtp
            onSubmit={handleSubmit}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            otpTouched={touched.token}
            otpErrors={errors.token}
            otpValue={values.token}
          />
        )}
      </Formik>
    </div>
  );
}
