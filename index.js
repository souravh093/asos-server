const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
const product = require("./data/products.json");

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/products", (req, res) => {
  res.send(product);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
