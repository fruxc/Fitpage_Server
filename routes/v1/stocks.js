const stocksService = require("../../services/stocksService");

// Get a list of stocks from service
module.exports = () => {
	return (req, res) => {
		const data = stocksService.getAllStocksData();
		res.status(200).json(data);
	};
};
