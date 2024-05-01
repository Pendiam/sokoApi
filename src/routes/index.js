const express = require("express");
const users = require("./userRoutes");
const router = express.Router();
const path = require("path");


// /**
//  * GET endpoint to greet the world.
//  */
// router.get("/", (req, res) => {
//   try {
//     // Send a greeting message
//     res.status(200).send("Hello World");
//   } catch (error) {
//     // If an error occurs, return a 500 status code
//     res.status(500).send("Internal Server Error");
//   }
// });



/**
 * GET endpoint to serve the index.html web page.
 */


router.get("/", (req, res) => {
  try {
    // Send the index.html web page
    res
      .status(200)
      .sendFile(path.join(__dirname, "..", "..", "web", "index.html"));
  } catch (error) {
    // If an error occurs, return a 500 status code
    res.status(500).send("Internal Server Error");
  }
});

// Mount the user router

router.use("/users", users);

module.exports = router;
