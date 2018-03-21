const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	Access: {
		type: String,
		enum : ['READ','WRITE', 'OWNER'],
		required: true
	},
	ResourceId: {
		type: String,
		required: true
	},
	ResourceType: {
		type: String,
		enum : ['COLLECTION','FILE'],
		required: true
	},
	UserId: {
		type: String,
		required: true
	},
});

module.exports = collectionSchema;
