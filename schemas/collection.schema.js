const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
	_id: String,
	Name: {
		type: String,
		required: true
	}
});

module.exports = collectionSchema;
