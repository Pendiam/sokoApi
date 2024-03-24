const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController");

// Create a router instance
const users = express.Router();

/**
 * Route to create a new user.
 * @name POST/api/users
 */
users.post("/", createUser);

/**
 * Route to get all users.
 * @name GET/api/users
 */
users.get("/", getAllUsers);

module.exports = users;
