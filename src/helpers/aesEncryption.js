import CryptoJS from "crypto-js";

/*-----------------------------------------------------*/
// ENCRYPT & DECRYPT
/*-----------------------------------------------------*/
// const secretKey = process.env.ENCRYPTION_SECRET_KEY;
// const secretKey = "5586b81b689fce1fcda534872051d97f";

export function encrypt(plainText) {
  // const secretKey = process.env.ENCRYPTION_SECRET_KEY;
  const secretKey = "5586b81b689fce1fcda534872051d97f";

  // console.log(secretKey);
  const cipherText = CryptoJS.AES.encrypt(plainText, secretKey).toString();
  return cipherText;
}

export function decrypt(cipherText) {
  const secretKey = process.env.ENCRYPTION_SECRET_KEY;
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const plainText = bytes.toString(CryptoJS.enc.Utf8);
  return plainText;
}
