var fs = require("fs");

/*
 * GET users listing.
 */

exports.list = function(db, champService) {
	return function(req, res) {
		champService.list(db, req.params.decade, function(err, data) {
			if (err) throw err;
			res.json(data);
		});
	};
};

exports.year = function(req, res) {
	var selYear = req.param('year');
	console.log('selected year: ' + selYear);
	if (selYear === '97') {
		res.json({year: 1997});
	} else if (selYear === '98') {
		res.json({year: 1998});
	} else {
		res.json({year: 'unknowed'});
	}
};

exports.example = function(req, res) {
	handleChampionships(res, '/example');
};


var handleChampionships = function(response, pathname) {
	console.log("Request handler " + pathname + " was called.");

	fs.readFile('data_example.json', function(err, data) {
		if (err) throw err;
		response.json(JSON.parse(data));
	});
};