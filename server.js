// server.js
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes"); // Import routes from the index.js file in the routes directory
const { app_port, app_name, origins } = require("./src/config");

const app = express();

// Configuration for CORS
const corsOptions = {
  origin: origins, // Allow requests from specified origins
  credentials: true, // Enable credentials in CORS
};

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors(corsOptions)); // Enable CORS with options

app.use(express.static("web"));

// Routes
app.use("/", routes);
app.use("/api", routes);

// Start server
app.listen(app_port, () => {
  console.log(`${app_name} Server is running on port ${app_port}`);
});
