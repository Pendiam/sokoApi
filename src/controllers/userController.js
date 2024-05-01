const User = require("../models/User");

/**
 * Create a new user
 * @name POST/api/users
 */
exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if all fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Validation: Check if email is valid
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "The user email is invalid" });
    }

    // create a new user in the database
    const user = await User.create(req.body);

    // return the created user object (excluding password)
    const newUser = sanitizeUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    // console.error("Error creating user:", error);

    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .json({ error: `The user ${error.errors[0].message}` });
    }
    if (error.name === "SequelizeValidationError") {
      return res
        .status(400)
        .json({ error: `The user ${error.errors[0].path} is invalid` });
    }

    return res.status(400).json({ error: "Failed to create user" });
  }
};

/**
 * Get all users.
 * @name GET/api/users
 */
exports.getAllUsers = async (req, res) => {
  try {
    // Perform user retrieval logic
    const users = await User.findAll();

    // Sanitize user objects
    const sanitizedUsers = users.map((user) => {
      return sanitizeUser(user);
    });

    res.status(200).json(sanitizedUsers);
  } catch (error) {
    // Log error
    console.error("Error getting users:", error);

    // Send a generic error response
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Helper functions...

/**
 * Sanitize user object by removing sensitive information.
 */
function sanitizeUser(user) {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isActive: user.isActive,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    deletedAt: user.deletedAt,
  };
}

/**
 * Validate email address.
 */
function isValidEmail(email) {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
