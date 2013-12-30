var http = require("http");
var fs = require("fs");
var url = require("url");
var express = require('express');

var startServer = function() {
	var app = express();

	app.use(express.logger());
	app.use(express.favicon(__dirname + '/../img/favicon.ico'));
	app.use(express.static(__dirname + '/../img'));
	app.use(express.static(__dirname + '/../public'));

	app.get('/example', function(req, res) {
		handleChampionships(res, '/championships');
	});

	app.get('/championships', function(req, res) {
		res.json(['1996-97', '1997-98', '1998-99']);
	});

	app.get('/championships/:year', function(req, res){
		var selYear = req.param('year');
		console.log('selected year: ' + selYear);
		if (selYear === '97') {
			res.json({year: 1997});
		} else if (selYear === '98') {
			res.json({year: 1998});
		} else {
			res.json({year: 'unknowed'});
		}
	});

	app.get('*', function(req, res) {
		console.log("No request handler found for " + req.url);
		res.send(404, 'Sorry, we cannot find that!');
	});

	app.listen(3000);
	console.log('Express server started on port 3000');
};


var handleChampionships = function(response, pathname) {
	console.log("Request handler " + pathname + " was called.");

	fs.readFile('data_example.json', function(err, data) {
		if (err) throw err;
		response.json(JSON.parse(data));
	});
};

startServer();