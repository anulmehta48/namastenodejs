// console.log("namaste nodejs");
// (function () {
//   let a = 20;
//   console.log(a);
//   console.log("iife");
// })();

const crypt = require("crypto");

console.log("hello word");

crypt.pbkdf2Sync("password", "salt", 500000, 50, "sha512")
console.log("First key is generated");

crypt.pbkdf2("password", "salt", 5000, 50, "sha512", (err, key) => {
  console.log("second key is generated");
});

function multiplyfn(x, y) {
  const result = x + y;
  return result;
}
let g = multiplyfn(5, 8);
console.log(g);
