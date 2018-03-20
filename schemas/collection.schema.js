const mongoose = require('mongoose');

const collectionSchema = mongoose.Schema({
	_id: String,
	Name: {
		type: String,
		required: true
	},
	Directory: {
		type: String,
		required: true
	},
	UrlPath: {
		type: String,
		required: true
	},
	Permissions: [
		{
			UserId: {
				type: String,
				required: true
			},
			Access: {
				type: String,
				enum : ['READ','WRITE', 'OWNER'],
				default: 'READ',
				required: true
			}
		}
	]
});

module.exports = collectionSchema;
