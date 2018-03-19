const dbService = require('./../../services/db.service');

const collectionProvider = (function () {

	function addCollection(collection) {
		return new Promise((resolve, reject) => {
			dbService.insert('Collections', 'collection', collection).then(
				response => resolve(response),
				error => reject(error)
			);
		});
	}

	function getCollections() {
		return getFilteredCollections({});
	}

	function getFilteredCollections(query) {
		return new Promise((resolve, reject) => {
			dbService.getAll('Collections', 'collection', query).then(
				response => resolve(response),
				error => reject(error)
			);
		});
	}

	return {
		addCollection: addCollection,
		getCollections: getCollections,
		getFilteredCollections: getFilteredCollections,
	}
})();

module.exports = collectionProvider;
