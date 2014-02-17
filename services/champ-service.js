var _ = require('underscore');
var champs = [
	{season: '1950-51', league: 'LCP - L', placing: 10},
	{season: '1951-52', league: 'LCP - L', placing: 3},
	{season: '1952-53', league: 'IV Serie - E', placing: 2},
	{season: '1953-54', league: 'IV Serie - F', placing: 4},
	{season: '1954-55', league: 'IV Serie - G', placing: 15},
	{season: '1955-56', league: 'Promozione Regionale', placing: 2},
	{season: '1956-57', league: 'Promozione Regionale', placing: 1},
	{season: '1957-58', league: 'Interregionale', placing: 5},
	{season: '1958-59', league: 'IV Serie - G', placing: 4},
	{season: '1959-60', league: 'Serie C/b', placing: 7},

	{season: '1960-61', league: 'Serie C/b', placing: 6},
	{season: '1961-62', league: 'Serie C/b', placing: 14},
	{season: '1962-63', league: 'Serie C/c', placing: 13},
	{season: '1963-64', league: 'Serie C/c', placing: 4},
	{season: '1964-65', league: 'Serie C/c', placing: 4},
	{season: '1965-66', league: 'Serie C/c', placing: 8},
	{season: '1966-67', league: 'Serie C/c', placing: 10},
	{season: '1967-68', league: 'Serie C/c', placing: 8},
	{season: '1968-69', league: 'Serie C/b', placing: 3},
	{season: '1969-70', league: 'Serie C/b', placing: 4},

	{season: '1970-71', league: 'Serie C/b', placing: 4},
	{season: '1971-72', league: 'Serie C/b', placing: 1},
	{season: '1972-73', league: 'Serie B', placing: 4},
	{season: '1973-74', league: 'Serie B', placing: 2},
	{season: '1974-75', league: 'Serie A', placing: 12},
	{season: '1975-76', league: 'Serie A', placing: 14},
	{season: '1976-77', league: 'Serie B', placing: 9},
	{season: '1977-78', league: 'Serie B', placing: 1},
	{season: '1978-79', league: 'Serie A', placing: 10},
	{season: '1979-80', league: 'Serie A', placing: 4},

	{season: '1980-81', league: 'Serie A', placing: 10},
	{season: '1981-82', league: 'Serie A', placing: 6},
	{season: '1982-83', league: 'Serie A', placing: 13},
	{season: '1983-84', league: 'Serie A', placing: 10},
	{season: '1984-85', league: 'Serie A', placing: 14},
	{season: '1985-86', league: 'Serie B', placing: 1},
	{season: '1986-87', league: 'Serie A', placing: 12},
	{season: '1987-88', league: 'Serie A', placing: 12},
	{season: '1988-89', league: 'Serie A', placing: 12},
	{season: '1989-90', league: 'Serie A', placing: 18},

	{season: '1990-91', league: 'Serie B', placing: 4},
	{season: '1991-92', league: 'Serie A', placing: 18},
	{season: '1992-93', league: 'Serie B', placing: 6},
	{season: '1993-94', league: 'Serie B', placing: 7},
	{season: '1994-95', league: 'Serie B', placing: 18},
	{season: '1995-96', league: 'Serie C1/b', placing: 4},
	{season: '1996-97', league: 'Serie C1/b', placing: 8},
	{season: '1997-98', league: 'Serie C1/b', placing: 10},
	{season: '1998-99', league: 'Serie C1/b', placing: 8},
	{season: '1999-00', league: 'Serie C1/b', placing: 3},

	{season: '2000-01', league: 'Serie C1/b', placing: 5},
	{season: '2001-02', league: 'Serie C1/b', placing: 1},
	{season: '2002-03', league: 'Serie B', placing: 12},
	{season: '2003-04', league: 'Serie B', placing: 11},
	{season: '2004-05', league: 'Serie B', placing: 6},
	{season: '2005-06', league: 'Serie A', placing: 10},
	{season: '2006-07', league: 'Serie A', placing: 19},
	{season: '2007-08', league: 'Serie B', placing: 8},
	{season: '2008-09', league: 'Serie B', placing: 16},
	{season: '2009-10', league: 'Serie B', placing: 9},

	{season: '2010-11', league: 'Serie B', placing: 17},
	{season: '2011-12', league: 'Serie B', placing: 15},
	{season: '2012-13', league: 'Serie B', placing: 20},
	{season: '2013-14', league: 'Prima Divisione - b', placing: 0}
];

exports.list = function(db, decade, callback) {
	var data;
	if (decade) {
		data = _.filter(champs, function(year) {
			return year.season.substr(0,3) === decade.substr(0,3);
		});
	} else {
		data = champs;
	}
		
	callback(null, data);
};