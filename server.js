const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.post("/type", function(req, res) {
  console.log(req.body.data);
  const datas = req.body.data;
  const surface = parseFloat(datas.surface);
  const piece = parseFloat(datas.piece);
  const prix = parseFloat(datas.prix);
  const etat = datas.etat;
  const value = datas.value;

  var totalPrice = surface * prix;

  if (piece <= 2) {
    totalPrice = totalPrice * 1.05;
  } else if (piece === 3 || piece === 4) {
    totalPrice = totalPrice * 1.02;
  } else {
    totalPrice = totalPrice * 0.99;
  }

  if (value === "Maison") {
    totalPrice = totalPrice * 1.03;
  } else if (value === "Appartement") {
    totalPrice = totalPrice * 1.05;
  }

  if (etat === "Nécessite des travaux") {
    totalPrice = totalPrice * 0.9;
  } else if (etat === "Refait à neuf") {
    totalPrice = totalPrice * 1.12;
  }

  console.log(totalPrice);
  res.json(totalPrice);
});
app.listen(process.env.PORT || 8080);
