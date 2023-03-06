const fs = require("fs");

let n = 100000;
let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(Math.round(Math.random() * n));
}

let data = "[" + arr.toString() + "]";

// Write data in 'Output.txt' .
fs.writeFile(n + ".json", data, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
