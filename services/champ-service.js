
exports.list = function(db, callback) {
	var data = [
	{year: '1996-97', league: 'C1/b', position: 7}, 
	{year: '1997-98', league: 'C1/b', position: 10},
	{year: '1998-99', league: 'C1/b', position: 8}
	];
	callback(null, data);
};