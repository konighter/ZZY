/**
 * Created by Duokan on 2014-09-28.
 */
define('config',function(){
    return function(){
        requirejs.config({
            //By default load any module IDs from js/lib
            baseUrl: '../vendor',
            //except, if the module ID starts with "app",
            //load it from the js/app directory. paths
            //config is relative to the baseUrl, and
            //never includes a ".js" extension since
            //the paths config could be for a directory.
            paths: {
                jquery     : 'jquery/jquery.min',
                bootstrap : 'bootstrap/js/bootstrap.min',
                fullpage   : '../js/jquery.fullPage.min',
                jqueryui    :'jqueryui/jquery-ui.min',
                backbone    :'backbone/backbone',
                headhome     :'headroom/headroom.min'
            },
            shim : {
                bootstrap :['jquery'],
                fullpage  :['jquery','jqueryui'],
                headhome   :['jquery']
            }
        });
    }
});

