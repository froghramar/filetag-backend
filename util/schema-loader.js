const schemaLoader = (function () {

	function getSchema(schemaName) {
		return require('../schemas/' + schemaName + '.schema');
	}

	return {
		getSchema: getSchema
	}
})();

module.exports = schemaLoader;
