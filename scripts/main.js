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
        views:      'scripts/views',
        modules:    'scripts/modules'
    }
});

/*===============================*/
/*=============PUBLIC METHODS============*/
/*===============================*/

function navigateto(_pageid){
    if(router){
        if(_pageid == "back") router.prevpage();
        else router.navigate(_pageid, true );
    }
}
/*===============================*/
/*=============ROUTER============*/
/*===============================*/

require([
    'routes/router'
], function(Router) {
    router            = new Router();
    console.log(base_url, root_dir);

    //========MASTER CLICK EVENTS=========//

    //---------Page Navigation-----------//
    $("#main-nav-container a[data-navigate-to]").click(function(){
        navigateto( $(this).attr("data-navigate-to") );
    });

    $("#footer form#gift-code-form").submit(function(e){
        e.preventDefault();

        var _form = $(this);

        console.log("submit gift code", _form);
        
        $.ajax({
          type: 'POST',
          url: base_url + 'clients/code',
          data: _form.serialize(),
          dataType:'json'
        }).done(function(result){ 
            console.log("get code complete: ", result);
            
            router.setclient( result );
            navigateto("tshirt");
        }).error(function(er){
            console.log(er.responseText);
        });
    });
});
