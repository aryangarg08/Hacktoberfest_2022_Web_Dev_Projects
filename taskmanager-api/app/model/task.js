const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "This task requires the name property"],
		trim: true,
		maxlength: [20, "Length should be less than 20"],
		minlength: [3, "Length should be greater than 3"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Task", TaskSchema);
