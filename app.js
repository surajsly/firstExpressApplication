const http = require("http");
const bodyParser = require("body-parser");

const express = require("express");

const app = express();

//parse body automaticaly
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title' ><button type='submit'>SEnd</button></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello from express</h1>");
});

app.listen(3001);
