const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
var value;

app.post("/type", function(req, res) {
  console.log(req.body);
  value = req.body.value;
});
console.log(value);

app.listen(process.env.PORT || 8080);
