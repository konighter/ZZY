// Important
exports.name = 'user';

// Optional
exports.install = function(framework, options) {

};

// Optional
exports.uninstall = function(framework, options) {

};

// Optional
exports.usage = function() {
    return {};
};

function User(user) {
	this.username = user.username;
	this.password = user.password;
};
exports.User = User;

exports.get = function(username, callback) {
    var self = framework;

    // definitions/mysql.js
    // create a DB connection
    self.database(function(err, connection){
        if(err != null) {
            self.throw500(err);
            return;
        }
		var sql = "SELECT * FROM users where username='"+username+"'";
        connection.query(sql, function(err, rows) {

            // Close connection
            connection.release();

            if (err != null) {
                self.view500(err);	               
                return;
            }
            
            if (rows[0]) {
				var user = new User(rows[0]);
				callback(err, user);
			} else {
				callback(err, null);
			}
      	});
	});
};



