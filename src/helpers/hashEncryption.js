import bcrypt from "bcryptjs";

/*-----------------------------------------------------*/
// HASH & COMPARE
/*-----------------------------------------------------*/

// HASHING VALUE
export function hash(value) {
  // const salt = process.env.REACT_APP_HASH_LV1_SECRET_KEY;
  const salt = "$2a$10$6AzQa/UK4cZclJ0OIg4uju";
  return bcrypt.hashSync(value, salt);
}

// COMPARING A HASHED VALUES WITH ANOTHER HASHED VALUE
export function compare(value, valueToCompare) {
  return bcrypt.compareSync(value, valueToCompare);
}
