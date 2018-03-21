const mongoose = require('mongoose');

const fileTypeSchema = mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	Extensions: [ String ],
	Name: {
		type: String,
		required: true
	},
});

module.exports = fileTypeSchema;
