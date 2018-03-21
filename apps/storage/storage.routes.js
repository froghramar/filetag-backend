const express = require('express');
const router = express.Router();

const request = require('request');

router.get('/', function (req, res, next) {
	request('https://www.google.com/images/srpr/logo3w.png').pipe(res);
});

module.exports = router;
