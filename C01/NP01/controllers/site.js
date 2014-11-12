/**
 * Created by Duokan on 2014-09-25.
 */
exports.install = function(framework) {
    framework.route('/', home);
    framework.route('/signin', view_signin);
    framework.route('/signin', do_signin, ['post']);
    framework.route('/logout', logout, ['authorize', 'get']);
};

function home(req,res){
    var self = this;
    console.log(self.get);
    self.view('index');
}

function view_signin(req,res){
    var self = this;
    self.view('signin');
}

function do_signin() {
    var self = this;
    var errorBuilder = self.validate(self.post, ['LoginName', 'LoginPassword']);

    if (self.user !== null)
        errorBuilder.add('Logged');

    if (errorBuilder.hasError()) {
        self.json(errorBuilder);
        return;
    }

    var username = self.post.LoginName;
    var password = self.post.LoginPassword;
    var User = MODEL("user");
    User.get(username, function(err, user) {
		if (!user) {
            errorBuilder.add('LoginError');
            self.json(errorBuilder);
			return self.redirect('/signin');
		}
		if (user.password != password) {
            errorBuilder.add('LoginError');
            self.json(errorBuilder);
			return self.redirect('/signin');
		}

        //self.database('users-logs').insert({ id: user.username, email: user.username, ip: self.req.ip, date: new Date() });
        // save to cookie
        self.res.cookie(self.config.cookie, framework.encrypt({ id: user.username, ip: self.req.ip }, 'user'), new Date().add('m', 5));
        // return result
        self.json({ r: true });

		//self.redirect('/');
	});
}

function logout() {
    var self = this;
    self.res.cookie(self.config.cookie, '', new Date().add('y', -1));
    self.redirect('/');
}