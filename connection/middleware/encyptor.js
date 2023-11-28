import crypto  from "crypto"

export function randomizer(length) {
  let result = crypto.randomBytes(length);
  // i don't like wahala
  // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // var charactersLength = characters.length;

  // for (let i = 0; i < length; i++) {
  //   randomIndex = Math.floor(Math.random() * charactersLength).toString();
  //   result += characters.charAt(randomIndex);

  // }
  return result;
}

export function encrypt(data, key, iv) {
  // Generate a random initialization vector (IV)
  let message = JSON.stringify(data)
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(message, 'utf-8', 'hex')   

    encrypted += cipher.final("hex")

    return encrypted
  }

export function decrypt(encodedValue, secretKey, iv) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", secretKey, iv);
  let decrypted = decipher.update(encodedValue, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return JSON.parse(decrypted);
}
