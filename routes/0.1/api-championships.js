var fs = require("fs");

var sendError = function (res, error) {
    console.log('ERROR!');
    console.log(error);
    console.log(JSON.stringify(error));
    res.json({error: error.toString()});
};

exports.overview = function (db) {
    return function(req, res) {
        var champs = db.collection('champs');
        champs.find({}, {_id: 0}, function (err, docs) {
            if (err)
                sendError(res, err);
            if (!err && docs)
                res.json(docs);
        });
    };
};

exports.overviewDecade = function (db) {
    return function(req, res) {
        var decade = req.params.decade;
        var champs = db.collection('champs');
        champs.find({season: {$regex: decade.substr(0,3)}}, {_id: 0}, function (err, docs) {
            if (err)
                sendError(res, err);
            if (!err && docs)
                res.json(docs);
        });
    };
};

exports.example = function(req, res) {
	handleChampionships(res, '/example');
};


var handleChampionships = function(response, pathname) {
	console.log("Request handler " + pathname + " was called.");

	fs.readFile('data_example.json', function(err, data) {
		if (err)
            sendError(res, err);
		response.json(JSON.parse(data));
	});
};
