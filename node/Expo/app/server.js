const http = require("http");

const server = http.createServer(function (req, res) {
  res.write("\n\t welcome to node server ");
  res.end();
});

server.listen(5000, () => console.log("\n\t server started \n"));

// curl -X GET 127.0.0.1:5000

