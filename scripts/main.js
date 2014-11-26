'use strict';

/*===============================*/
/*========CONFIGURATION==========*/
/*===============================*/

require.config({
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
        // CHARLES CODE TO TRIGGER CLASS ON BODY
        // GET DATA ATT FROM NAV
        var page = 'page-' + $(this).parent("li").attr("data-id");
        // ADD CLASS TO BODY NAED AFTER NAV DATA ATTT
        $('body').removeClass().addClass(page);
        // END CHARLES CODE
        
        router.navigate( $(this).parent("li").attr("data-id"), true );
    });
});
