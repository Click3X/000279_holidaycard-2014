'use strict';

/*----- user agent ------*/
var i,ie8,svg,mobile,retina,
uagent = navigator.userAgent.toLowerCase(),
search_strings = [ "iphone","ipod","ipad","series60","symbian","android","windows ce","windows7phone","w7p","blackberry","palm" ];

for(i in search_strings){
    if( uagent.search( search_strings[i] ) > -1 ) mobile = true;
}

/*---retina display------*/
if( window.devicePixelRatio > 1 ) retina = true;

/*--------svg---------*/
if( document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1" ) ) svg = true;

/*-----add console log if needed----- */
if( typeof console == "undefined" ) {
    window.console = { log:function(){} };
}

/*-----add object keys if needed----- */
if( !Object.keys ){
    Object.keys = function( obj ){
        var keys = [];

        for( var i in obj ){
            if( obj.hasOwnProperty( i ) ) keys.push( i );
        }

        return keys;
    };
}

/*--------facebook sdk---------*/
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1515702512016907',
      xfbml      : true,
      version    : 'v2.2'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/*--------twitter share---------*/
window.twttr=(function(d,s,id){
    var t,js,fjs=d.getElementsByTagName(s)[0];
    if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;
    js.src="https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
    return window.twttr||(t={_e:[],ready:function(f){t._e.push(f)}})
}(document,"script","twitter-wjs"));

/*--------set default body tags---------*/
function setbodytags(){
    document.body.className = "noselect";
    if(mobile) document.body.className+=" mobile";
    if(retina) document.body.className+=" retina";
    if(ie8) document.body.className+=" ie8";
    if(svg) document.body.className+=" svg";
}

/*--------set default pop window parameters---------*/
function openpopup(url, title, w, h){
    // Fixes dual-screen position Most browsers Firefox
    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - h) + dualScreenTop;
    var newWindow = window.open(url, title, 'scrollbars=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }
}

setbodytags();

/*-----require----- */
require.config({
    baseUrl: base_url,
    shim: {
        bootstrap: {
            deps:       ['jquery'],
            exports:    'jquery'
        }
    },
    paths: {
        jquery:     'scripts/vendor/jquery/jquery.min',
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
    });
});
