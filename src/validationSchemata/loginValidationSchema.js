import * as Yup from "yup";

/*-------------------------------------------------*/
// VALIDATION SCHEMA: Login
/*-------------------------------------------------*/

export const loginValidationSchema = Yup.object({
  data: Yup.string().required(
    "User's data is required to log in (email or username can be used)."
  ),

  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least 6 characters, min. 1 letter, min. 1 uppercase letter, min. 1 symbol. Symbols that can be used are @$!%*?&"
    ),
});
