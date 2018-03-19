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

	function updateCollection(collection) {
		return new Promise((resolve, reject) => {
			dbService.updateById('Collections', 'collection', collection).then(
				response => resolve(response),
				error => reject(error)
			);
		});
	}

	function deleteCollection(filter) {
		return new Promise((resolve, reject) => {
			dbService.deleteOne('Collections', 'collection', filter).then(
				response => resolve(response),
				error => reject(error)
			);
		});
	}

	return {
		addCollection: addCollection,
		deleteCollection: deleteCollection,
		getCollections: getCollections,
		getFilteredCollections: getFilteredCollections,
		updateCollection: updateCollection,
	}
})();

module.exports = collectionProvider;
