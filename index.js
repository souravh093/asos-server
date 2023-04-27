const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
const products = require("./data/products.json");



app.get("/", (req, res) => {
  res.send("hello world!");
});



app.get("/products", (req, res) => {
  res.send(products);
});



app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const selectedId = products.find(pro => parseFloat(pro.id) === parseFloat(id))
  console.log(selectedId)
  res.send(selectedId)
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
