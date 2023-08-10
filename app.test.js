const request = require("supertest");
const app = require("./app");
const server = require("./server");
const data = require("./database/data.json");

describe("Test the Express app routes", () => {
	it("should respond with a 404 for an unknown route", async () => {
		const response = await request(app).get("/unknown");
		expect(response.status).toBe(404);
	});

	it("should respond with a 200 and the correct message for the default route", async () => {
		const response = await request(app).get("/");
		expect(response.status).toBe(200);
		expect(response.body).toEqual({ message: "Access API v1 Stocks" });
	});

	it("should respond with a 200 and the data.json file from database", async () => {
		const response = await request(app).get("/api/v1/stocks");
		expect(response.status).toBe(200);
		expect(response.body).toEqual(data);
	});

	afterAll(() => {
		// Closing the server after tests are done
		server.close();
	});
});
