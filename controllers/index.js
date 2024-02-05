const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const testFunction =
  ("/",
  (req, res) => {
    res.send("Project Started");
  });

// getAllMovies
const getAllMovies = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("movies").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//getSingleMovie

//createMovie

//updateMovie

//deleteMovie

module.exports = { testFunction, getAllMovies };
