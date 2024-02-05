const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.testFunction);

routes.get("/movies", myController.getAllMovies);

//  movies route
routes.use("/movies", require("./movies"));

module.exports = routes;
