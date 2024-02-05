const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.testFunction);

//  movies route
routes.use("/movies", require("./movies"));

module.exports = routes;
