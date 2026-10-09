const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("\n\t error : " + err);
  }
  console.log("\n\t data from the file : " + data);
});




