require("./app.js");
//this is old way/ normal way of importing any modules
const obj = require("./sum.js");
console.log(typeof obj);

console.log(obj.name);
console.log(obj.mycalculate(10, 20));

//this is object destructing/new way of importing any modules
const { mycalculate, name } = require("./sum.js");

console.log(name);
console.log(mycalculate(10, 20));

console.log("this is xyz file ");

const data = require("./data.json");
console.log(data);
