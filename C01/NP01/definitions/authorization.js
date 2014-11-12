// ================================================
// AUTHORIZATION
// ================================================

framework.onAuthorization = function(req, res, flags, callback) {

	var self = this;

	var cookie = req.cookie(self.config.cookie);
	if (cookie === null || cookie.length < 10) {
		callback(false);
		return;
	}

	var obj = self.decrypt(cookie, 'user');

	if (obj === null || obj === '' || obj.ip !== req.ip) {
		callback(false);
		return;
	}

	var user = self.cache.read('user_' + obj.id);
	if (user !== null) {
		req.user = user;
		callback(true);
		return;
	}

    var User = MODEL("user");
    var username = obj.id;
    User.get(username, function(err, user) {
        if (user === null) {
            callback(false);
            return;
        }

        self.cache.add('user_' + username, user, new Date().add('m', 5));
        callback(true, user);
    });
};


framework.onValidation = function(name, value) {
	switch (name) {
		case 'LoginName':
			return utils.isEmail(value);
		case 'LoginPassword':
			return value.length > 0;
	};
}