const fs = require('fs');
const request = require('request');

const httpService = (function () {

	function download(uri, filename){
		return new Promise((resolve, reject) => {
			request.head(uri, function(err, res, body){
				request(uri).pipe(fs.createWriteStream(filename)).on('close', function () {
					resolve();
				});
			});
		});
	}

	return {
		download: download
	}

})();

module.exports = httpService;
