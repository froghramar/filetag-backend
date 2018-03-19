const express = require('express');
const router = express.Router();
const collectionProvider = require('./collection');

router.get('/', getCollections);
router.post('/', postCollection);
router.post('/get', getFilteredCollections);

function getCollections(req, res, next) {
	collectionProvider.getCollections().then(
		response => res.status(200).send(response),
		error => res.status(500).send(error)
	);
}

function getFilteredCollections(req, res, next) {

	const body = req.body;

	collectionProvider.getFilteredCollections(body).then(
		response => res.status(200).send(response),
		error => res.status(500).send(error)
	);
}

function postCollection(req, res, next) {

	const body = req.body;

	collectionProvider.addCollection(body).then(
		response => res.status(200).send(response),
		error => res.status(500).send(error)
	);
}

module.exports = router;
