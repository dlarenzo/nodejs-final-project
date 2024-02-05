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
const getSingleMovie = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("movies")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//createMovie
const createMovie = async (req, res) => {
  try {
    const movie = {
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating,
      director: req.body.director,
      plot: req.body.plot,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("movies")
      .insertOne(movie);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(response.error || "Some error occurred while creating movie");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//updateMovie
const updateMovie = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const movie = {
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating,
      director: req.body.director,
      plot: req.body.plot,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("movies")
      .replaceOne({ _id: userId }, movie);

    if (response.acknowledged) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while updating the student."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//deleteMovie
const deleteMovie = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("movies")
      .deleteOne({ _id: userId }, true);
    console.log(response);

    if (response.acknowledged) {
      res.status(200).json(response);
    } else {
      res
        .status(500)
        .json(response.error || "Some error occurred while deleting the movie");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  testFunction,
  getAllMovies,
  getSingleMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
