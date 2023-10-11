const mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  name: {
    type: String
  },
  author: {
    type: String
  },
  price: {
    type: Number
  }
}, {collection: "books"});

module.exports = mongoose.model("Book", bookSchema);