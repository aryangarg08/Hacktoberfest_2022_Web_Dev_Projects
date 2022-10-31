const Task = require("../model/task");
const asyncWrapper = require("../middleware/asyncWrapper");
const { createCustomError } = require("../errors/customError");

const callerFunction = async (CollectionsObj) => {
	return await CollectionsObj.find({});
};

const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await callerFunction(Task);
	res.status(200).json({
		success: true,
		tasks,
	});
});

// findOne method
const getTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.findOne({
		_id: taskId,
	});
	if (!task) {
		return next(createCustomError("Task does not exist", 404));
	}
	res.status(200).json({
		success: true,
		task,
	});
});

const postTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(200).json({
		success: true,
		task,
	});
});

// only the passed key-value pairs will be updated
// for PUT include overwrite: true as one for the options, which'll remove the pairs which aren't passed to the function, thereby sticking with the meaning of the HTTP request method.

const updateTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
		new: true,
		runValidators: true,
	});

	if (!task) {
		return next(createCustomError("Task does not exist", 404));
	}
	res.status(200).json({
		success: true,
		id: taskId,
		task,
	});
});

const deleteTask = asyncWrapper(async (req, res, next) => {
	const { id: taskId } = req.params;
	const task = await Task.deleteOne({
		_id: taskId,
	});
	if (task.deletedCount === 0) {
		return next(createCustomError("No tasks were deleted", 404));
	}
	res.status(200).send({
		success: true,
		message: "Task deleted successfully",
	});
});

module.exports = {
	getAllTasks,
	getTask,
	postTask,
	updateTask,
	deleteTask,
};