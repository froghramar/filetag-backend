const mongoose = require('mongoose');
const schemaLoader = require('../util/schema-loader');
const guidGenerator = require('guid');

const dbService = (function() {

	function connect() {
		mongoose.connect(process.env.DB_URL);
	}

	connect();

	function getOne(collection, model, filter) {

		const schema = schemaLoader.getSchema(model);
		const Model = mongoose.model(model, schema, collection);

		return Model.findOne(filter);
	}

	function getAll(collection, model, filter) {

		const schema = schemaLoader.getSchema(model);
		const Model = mongoose.model(model, schema, collection);

		return Model.find(filter);
	}

	function deleteOne(collection, model, filter) {
		const schema = schemaLoader.getSchema(model);
		const Model = mongoose.model(model, schema, collection);

		return Model.deleteOne(filter);
	}

	function deleteMany(collection, model, filter) {
		const schema = schemaLoader.getSchema(model);
		const Model = mongoose.model(model, schema, collection);

		return Model.deleteMany(filter);
	}

	function disconnect(){
		return mongoose.connection.close();
	}

	function insert(collection, model, data) {

		if(!data._id) data._id = guidGenerator.create();

		const schema = schemaLoader.getSchema(model);
		const Model = mongoose.model(model, schema, collection);
		const newData = new Model(data);

		return newData.save();
	}

	function updateById(collection, model, data) {
		const schema = schemaLoader.getSchema(model);
		const Model = mongoose.model(model, schema, collection);

		return Model.findByIdAndUpdate(data._id, { $set: data});
	}

	return {
		connect: connect,
		deleteOne: deleteOne,
		deleteMany: deleteMany,
		disconnect: disconnect,
		getOne: getOne,
		getAll: getAll,
		insert: insert,
		updateById: updateById
	}
})();

module.exports = dbService;
