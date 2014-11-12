var mysql = require('mysql');
var pool  = mysql.createPool({ host: '10.10.77.96', user: 'ads', password: 'ads' ,insecureAuth: true,database:'resume'});

// override the framework prototype
// use CONFIG files for connection string
framework.database = function(callback) {
	return pool.getConnection(callback);
};