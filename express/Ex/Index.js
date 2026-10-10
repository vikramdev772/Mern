const express = require("express");

const server = express();

server.get("/", function (req, res) {
  res.send("\n\t your hiting the index end point \n");
});

server.listen(4000, function () {
  console.log("\n\t server started sucess fully ...\n");
});
