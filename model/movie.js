// LAYOUT OF TASKS ADDED HERE
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// name, year, rating, director, plot
const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("movies", MovieSchema);
