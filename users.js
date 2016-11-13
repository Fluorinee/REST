/*{
		"id": 1,
		"name": "goldroger",
		"name": "Gol D. Roger",
		"position": "Pirate King"
	},*/
var users = [
	{
		"id": "143597012",
		"name": "BERGAMOT",
		"amount": "986.00"
	},
	{
		"id": 2,
		"name": "siamsquare",
		"number": "243497461",
		"amount": "2430.00"
	},
	{
		"id": 3,
		"name": "onionBKK",
		"number": "341275033",
		"amount": "1400.00"
	},
	{
		"id": 4,
		"name": "truemoveH",
		"number": "432368819",
		"amount": "190.00"
	},
	{
		"id": 5,
		"name": "Dtac",
		"number": "537695612",
		"amount": "42.00"
	}
];

exports.findAll = function() {
	return users;
};

exports.findById = function (id) {
	for (var i = 0; i < users.length; i++) {
		if (users[i].id == id) return users[i];
	}
};