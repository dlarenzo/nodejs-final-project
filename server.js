const express = require("express");
const mongodb = require("./db/connect");
const cors = require("cors");

//  EXPRESS APP
const app = express();

//  LISTENING  PORT
const PORT = process.env.PORT || 3000;

//  USE
app
  .use(cors())
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(
      "\x1b[34m%s\x1b[0m",
      `Connected to DEB and listening on ${PORT}`
    );
  }
});

//old set up
// app.use("/", require("./routes"));

// app.listen(3000, () => {
//   console.log(`Test server running on port: ${PORT}`);
// });
