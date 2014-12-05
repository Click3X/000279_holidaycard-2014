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
        jquery:     'scripts/vendor/jquery/dist/jquery',
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

/*===============================*/
/*=============PUBLIC METHODS============*/
/*===============================*/

// function navigateto(_pageid){
//     if(router){
//        router.navigate(_pageid, true );
//     }
// }
/*===============================*/
/*=============ROUTER============*/
/*===============================*/

require([
    'routes/router'
], function(Router) {
    router            = new Router();
    
    console.log(base_url, root_dir);

    //========MASTER CLICK EVENTS=========//
    // $("#footer form#gift-code-form").submit(function(e){
    //     e.preventDefault();

    //     var _form = $(this);

    //     console.log("submit gift code", _form);
        
    //     $.ajax({
    //       type: 'POST',
    //       url: base_url + 'clients/code',
    //       data: _form.serialize(),
    //       dataType:'json'
    //     }).done(function(result){ 
    //         console.log("get code complete: ", result);
            
    //         router.setclient( result );
    //         navigateto("tshirt");
    //     }).error(function(er){
    //         console.log(er.responseText);
    //     });
    // });
});
