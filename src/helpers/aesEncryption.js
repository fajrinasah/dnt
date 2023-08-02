import CryptoJS from "crypto-js";

/*-----------------------------------------------------*/
// ENCRYPT & DECRYPT
/*-----------------------------------------------------*/

export function encrypt(plainText) {
  const secretKey = process.env.REACT_APP_ENCRYPTION_SECRET_KEY;

  const cipherText = CryptoJS.AES.encrypt(plainText, secretKey).toString();
  return cipherText;
}

export function decrypt(cipherText) {
  const secretKey = process.env.ENCRYPTION_SECRET_KEY;
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  const plainText = bytes.toString(CryptoJS.enc.Utf8);
  return plainText;
}
