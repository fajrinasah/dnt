import * as Yup from "yup";

/*----------------------------------------------------
OTP TOKEN VALIDATION SCHEMA
-----------------------------------------------------*/
export const otpTokenValidationSchema = Yup.object({
  token: Yup.string()
    .required("Please input the OTP token.")
    .min(6, "Token must contains 6 characters.")
    .max(6, "Token must contains 6 characters."),
});
