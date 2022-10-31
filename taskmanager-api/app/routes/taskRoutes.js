const express = require("express");
const router = express.Router();
const {
	getAllTasks,
	getTask,
	postTask,
	updateTask,
	deleteTask,
} = require("../controller/taskController");

router.route("/").get(getAllTasks).post(postTask);
// Here we're using `patch` because, PATCH is for updating
// at least one key-value pair in a document
// Whereas PUT is for modifying the entire document
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
