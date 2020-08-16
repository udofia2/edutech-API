const crypto = require('crypto')

const { v4: uuidv4 } = require('uuid');
let a = ''
a = uuidv4()
console.log(a.slice(0,8))
console.log(uuidv4().slice(0,6))
// const secret = "abcdefg";
// const hash = crypto
//   .createHmac("sha256", secret)
//   .update("I love cupcakes")
//   .digest("hex");
// console.log(hash);

// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';
// // Use the async `crypto.scrypt()` instead.
// const key = crypto.randomBytes(password, 'salt', 24);
// // Use `crypto.randomBytes` to generate a random iv instead of the static iv
// // shown here.
// const iv = Buffer.alloc(16, 0); // Initialization vector.

// const cipher = crypto.createCipheriv(algorithm, key, iv);

// let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
// encrypted += cipher.final('hex');
// console.log(encrypted);