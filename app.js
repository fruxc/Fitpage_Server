const express = require("express");
// To solve the cors issue
const cors = require("cors");
// To configure the environment variables
require("dotenv").config();
// Routes configuration
const routesController = require("./routes/v1")();

const app = express();

// To access static files from default folder
app.use(express.static("public"));
app.use(cors());

// To use API routes
app.use("/api/v1", routesController);

// Default route
app.get("/", (req, res) => {
	res.status(200).json({ message: "Access API v1 Stocks" });
});

// Redirect incorrect routes to default
// app.get("*", function (req, res) {
// 	res.redirect("/");
// });

// Send 404 for unknown routes
app.use((req, res) => {
	res.sendStatus(404);
});

module.exports = app;
