'use strict';

/*-----require----- */
require.config({
    baseUrl: base_url,
    shim: {
        bootstrap: {
            deps:       ['jquery'],
            exports:    'jquery'
        },
        easing: {
            deps: ['jquery']
        },
        tweenmax: {
            exports: 'TweenMax'
        }
    },
    paths: {
        jquery:     'scripts/vendor/jquery/jquery.min',
        mobile:     'scripts/vendor/jquery/jquery.mobile.touch.min',
        tweenmax:   'http://cdnjs.cloudflare.com/ajax/libs/gsap/1.15.0/TweenMax.min',
        easing:     'scripts/vendor/jquery/jquery.easing',
        backbone:   'scripts/vendor/backbone/backbone',
        underscore: 'scripts/vendor/underscore/underscore-min',
        bootstrap:  'scripts/vendor/sass-bootstrap/dist/js/bootstrap',
        text:       'scripts/vendor/require/text.min',
        routes:     'scripts/routes',
        pages:      'scripts/pages',
        modules:    'scripts/modules',
        models:     'scripts/models'
    }
});

require([
    'routes/router'
], function( Router ) {

    /*-----start----- */
    $(document).ready(function(){

        /*----- start router ------*/
        router            = new Router();

        console.log("TweenMax", TweenMax)
    });
});
