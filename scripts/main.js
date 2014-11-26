'use strict';

/*===============================*/
/*========CONFIGURATION==========*/
/*===============================*/

require.config({
    baseUrl: base_url,
    shim: {
        bootstrap: {
            deps:       ['jquery'],
            exports:    'jquery'
        }
    },
    paths: {
        jquery:     '../scripts/vendor/jquery/dist/jquery',
        backbone:   '../scripts/vendor/backbone/backbone',
        underscore: '../scripts/vendor/underscore/underscore-min',
        bootstrap:  '../scripts/vendor/sass-bootstrap/dist/js/bootstrap',
        text:       '../scripts/vendor/require/text.min',
        routes:     '../scripts/routes',
        views:      '../scripts/views',
        modules:    '../scripts/modules'
    }
});
    
/*===============================*/
/*=============ROUTER============*/
/*===============================*/

require([
    'routes/router'
], function(Router) {
    router            = new Router();

    //========MASTER CLICK EVENTS=========//

    //---------Main navigation-----------//

    $(".nav li a").click(function(){
        router.navigate( $(this).parent("li").attr("data-id"), true );
    });
});
