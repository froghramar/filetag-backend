const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	_id: {
		type: String,
		required: true
	},
	Email: {
		type: String,
		required: true
	},
	Name: {
		type: String,
		required: true
	},
	Roles: [{
		type: String,
		enum: ['APPUSER', 'ADMIN']
	}],
	UserName: {
		type: String,
		required: true
	},
});

module.exports = userSchema;
