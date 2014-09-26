/**
 * Created by Duokan on 2014-09-25.
 */
exports.install = function(framework) {
    framework.route('/', home);
};

function home(req,res){
    var self = this;
    console.log(self.get);
    self.view('index');
}