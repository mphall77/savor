const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// INDEX
app.get("/", (_, res) => {
	res.send("Welcome to our Chef Finder App!");
});

// 404
app.get("*", (_, res) => {
	res.status(404).send("Page Not Found");
});

// EXPORT
module.exports = app;
