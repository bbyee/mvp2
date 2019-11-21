const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/nom", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to mongo DB!");
});
const faveSchema = new mongoose.Schema({
  id: Number,
  title: String,
  instructions: String
});

const Favorite = mongoose.model("Favorite", faveSchema);

// const testFavorite = new Favorite({
//   id: 000,
//   title: "testfavoriterecipe",
//   instructions: "testinstructions"
// });

// testFavorite.save(function(err, testFavorite) {
//   if (err) {
//     console.log("error saving test favorite", err);
//   } else {
//     console.log("test favorite successfully created for db!");
//   }
// });

module.exports.db = db;
module.exports.Favorite = Favorite;
module.exports = mongoose.model("Favorite", faveSchema);
