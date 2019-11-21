const express = require("express");
const app = express();
const port = 3000;
const db = require("../database/index.js");
const Favorite = require("../database/index.js");

const bodyParser = require("body-parser");

app.use(express.static("dist"));

app.use(bodyParser.json());

app.post("/faves", (req, res) => {
  let newFave = new Favorite({
    id: req.body.id,
    title: req.body.id,
    instructions: req.body.instructions
  });
  newFave
    .save()
    .then(() => {
      console.log("Posted new fave");
      res.sendStatus(201);
    })
    .catch(err => {
      console.log("Error posting new fave", err);
      res.sendStatus(500);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
