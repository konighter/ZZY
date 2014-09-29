/**
 * Created by Duokan on 2014-09-28.
 */
requirejs.config({
    baseUrl: '../vendor',
    paths: {
        jquery     : 'jquery/jquery.min',
        bootstrap : 'bootstrap/js/bootstrap.min',
        fullpage   : '../js/jquery.fullPage.min',
        jqueryui    :'jqueryui/jquery-ui.min',
        backbone    :'backbone/backbone',
    },
    shim : {
        bootstrap :['jquery'],
        fullpage  :['jquery','jqueryui'],
    }
});
requirejs(['jquery','fullpage'],function($){

    $(document).ready(function() {

        $('#site').fullpage({
            anchors: ['home', 'service', 'further', 'contact', 'join'],
            menu: '#menu',
        });
    });

});
