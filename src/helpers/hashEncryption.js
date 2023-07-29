import bcrypt from "bcryptjs";

/*-----------------------------------------------------*/
// HASH & COMPARE
/*-----------------------------------------------------*/
// const secretKey = process.env.HASH_LV1_SECRET_KEY;
// const secretKey = "$2a$10$6AzQa/UK4cZclJ0OIg4uju";

// HASHING VALUE
export function hash(value) {
  // console.log(secretKey);
  // const salt = process.env.HASH_LV1_SECRET_KEY;
  const salt = "$2a$10$6AzQa/UK4cZclJ0OIg4uju";
  return bcrypt.hashSync(value, salt);
}

// COMPARING A HASHED VALUES WITH ANOTHER HASHED VALUE
export function compare(value, valueToCompare) {
  return bcrypt.compareSync(value, valueToCompare);
}

// // HASHING VALUE
// export function hash(value, salt) {
//   return bcrypt.hashSync(value, salt);
// }

// // COMPARING A HASHED VALUES WITH ANOTHER HASHED VALUE
// export function compare(value, valueToCompare) {
//   return bcrypt.compareSync(value, valueToCompare);
// }
