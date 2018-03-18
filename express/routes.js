const collection = require('../apps/collection/index');

const routes = [
	{
		path: "/collections",
		handler: collection
	}
];

module.exports = routes;
