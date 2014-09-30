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
        'nivo-slider'  :'nivo-slider/jquery.nivo.slider.pack',
    },
    shim : {
        bootstrap :['jquery'],
        fullpage  :['jquery','jqueryui'],
        'nivo-slider' : ['jquery']
    }
});
requirejs(['jquery','fullpage', 'nivo-slider'],function($){

    $(document).ready(function() {

        $('#site').fullpage({
            anchors: ['home', 'service', 'further', 'contact', 'join'],
            menu: '#menu',
        });
        $('#slider').nivoSlider();
    });

});
