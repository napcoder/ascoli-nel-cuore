
exports.list = function(db, callback) {
	var data = [
		{year: '1921-22', league: 'false', position: 3},
		{year: '1922-23', league: 'false', position: 4},
		{year: '1996-97', league: 'Serie C1/b', position: 7},
		{year: '1997-98', league: 'Serie C1/b', position: 10},
		{year: '1998-99', league: 'Serie C1/b', position: 8}
	];
	callback(null, data);
};