import bcrypt from "bcryptjs";

// HASHING VALUE
export function hash(value, salt) {
  return bcrypt.hashSync(value, salt);
}

// COMPARING A HASHED VALUES WITH ANOTHER HASHED VALUE
export function compare(value, valueToCompare) {
  return bcrypt.compareSync(value, valueToCompare);
}
