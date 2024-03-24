const express = require("express");
const users = require("./userRoutes");
const router = express.Router();

/**
 * GET endpoint to greet the world.
 */
router.get("/", (req, res) => {
  try {
    // Send a greeting message
    res.status(200).send("Hello World");
  } catch (error) {
    // If an error occurs, return a 500 status code
    res.status(500).send("Internal Server Error");
  }
});

// Mount the user router

router.use("/users", users);

module.exports = router;
