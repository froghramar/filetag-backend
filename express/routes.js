const collection = require('../apps/collection/collection.routes');
const file = require('../apps/storage/storage.routes');

const routes = [
	{
		path: "/collections",
		handler: collection
	},
	{
		path: "/storage",
		handler: file
	}
];

module.exports = routes;
