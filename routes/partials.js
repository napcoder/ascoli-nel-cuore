
/*
 * GET partial views for AngularJs.
 */

exports.home = function(req, res) {
	res.render('home');
};

exports.partial1 = function(req, res) {
	res.render('partial1');
};

exports.api = function(req, res) {
	res.render('api');
};