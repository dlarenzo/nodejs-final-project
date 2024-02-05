// add express
const express = require("express");

// add express router
const router = express.Router();

//  link to Movie controller (create const and require back to controller file)
const MovieController = require("../controllers/index");

//  ROUTES
//  Routes for pulling All Movies, Single Movie, Create Movie, Update Movie, Delete Movie

// ROUTE TO GET ALL MOVIES (.GET)
router.get("/", MovieController.getAllMovies);

//  ROUTE TO GET SINGLE MOVIE FROM ID (.GET)
//router.get("/:id", MovieController.getSingleMovie);

//  ROUTE TO CREATE A MOVIE (.POST)
//router.post("/", MovieController.createMovie);

//  ROUTE TO UPDATE MOVIE (.PUT)
//router.put("/:id", MovieController.updateMovie);

//  ROUTE TO DELETE MOVIE (.DELETE)
// router.delete("/:id", MovieController.deleteMovie);

//  EXPORT ROUTER
module.exports = router;
