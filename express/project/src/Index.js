const express = require("express");
const app = express();

let port = 4000;

app.get("/", (req, res) => {
  res.send("\n\t server is running sucessfully ");
});

app.get("/fruit", (req, res) => {
  const r = {
    msg: "fruits api",
    status: "200 ok",
    data: "🍏🍎🍑🥭🫐",
  };
  res.json(r);
});

app.listen(port, () => {
  console.log(`\n\t server started \n\t 127.0.0.1:${port}/ \n`);
});
