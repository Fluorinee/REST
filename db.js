var mongojs = require('mongojs');

var databaseUrl = 'store:1234@ds151117.mlab.com:51117/heroku_4wv8zgzh';
var collections = ['user'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
	connect: connect
};