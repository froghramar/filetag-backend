const express = require('express');
const router = express.Router();
const dbService = require('./../../services/db.service');

router.get('/', getCollection);
router.post('/', postCollection);

function getCollection(req, res, next) {

	dbService.getAll('Collections', 'collection', {}).then(
		function (response) {
			res.status(200).send(response);
		},
		function (error) {
			res.status(500).send(error);
		}
	);
}

function postCollection(req, res, next) {

	const body = req.body;

	dbService.insert('Collections', 'collection', body).then(
		function (response) {
			res.status(200).send(response);
		},
		function (error) {
			res.status(500).send(error);
		}
	);
}

module.exports = router;
