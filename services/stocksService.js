const fs = require("fs");

// Read the file contents from data.json and return it
let stocksData = {};
fs.readFile("./database/data.json", "utf8", (err, data) => {
	if (err) {
		console.log("File read failed: ", err);
		return err;
	}
	stocksData = JSON.parse(data);
});

const getAllStocksData = () => {
	return stocksData;
};

module.exports = {
	getAllStocksData,
};
