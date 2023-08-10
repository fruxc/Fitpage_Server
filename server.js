const app = require("./app");

const server = app.listen(process.env.SERVER_PORT || 3001, () =>
	console.log("Server Start at the Port " + process.env.SERVER_PORT)
);

module.exports = server;
