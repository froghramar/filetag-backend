const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	Extension: {
		type: String,
		required: true
	},
	LocalPath: String,
	Name: {
		type: String,
		required: true
	},
	RemotePath: String,
});

module.exports = fileSchema;
