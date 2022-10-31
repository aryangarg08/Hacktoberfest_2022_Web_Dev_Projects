const mongoose = require("mongoose");

const mongooseConnect = (url) => {
	return mongoose.connect(url);
};

module.exports = mongooseConnect;
