const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	Directory: {
		type: String,
		required: true
	},
	Name: {
		type: String,
		required: true
	},
	UrlPath: {
		type: String,
		required: true
	},
});

module.exports = collectionSchema;
