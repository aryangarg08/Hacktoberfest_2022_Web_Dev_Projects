const express = require("express");
require("dotenv").config();
const app = express();
const taskRouter = require("./routes/taskRoutes");
const mongooseConnect = require("../db/connect");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");

app.use(express.json());
app.use("/api/v1", taskRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
	try {

		// In the below lines, we'll first connect with the cloud database and then if that works fine, we'll move onto connecting the actual application. This will prevent the server from running without a database connection.

		await mongooseConnect(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	} catch (err) {
		console.log(err);
	}
};

start();
