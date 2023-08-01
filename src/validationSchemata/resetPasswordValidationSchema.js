import * as Yup from "yup";

/*==========================================
VALIDATION SCHEMA: Reset Password
===========================================*/

export const resetPasswordValidationSchema = Yup.object({
  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least 6 characters, min. 1 letter, min. 1 uppercase letter, min. 1 symbol. Symbols that can be used are @$!%*?&"
    ),
  confirmPassword: Yup.string()
    .required("Plase re-enter your password.")
    .oneOf(
      [Yup.ref("password"), null],
      `Password in "Confirm password" must match with the password above.`
    ),
});
