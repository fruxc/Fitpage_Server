const routes = require("express").Router();

// Get request to return all the stocks data
module.exports = () => {
	routes.get("/stocks", require("./stocks")());
	return routes;
};
