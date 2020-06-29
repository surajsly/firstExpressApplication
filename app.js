const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");

const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

//parse body automaticaly
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//this always run
app.use("/", (req, res, next) => {
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3001);
