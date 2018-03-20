const mongoose = require('mongoose');

const fileTypeSchema = mongoose.Schema({
	_id: String,
	Name: {
		type: String,
		required: true
	},
	Extensions: [String],
});

module.exports = fileTypeSchema;
