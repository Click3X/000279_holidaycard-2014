/*global define*/

define([
    'views/page',
    'text!/template/video.php'
], function (PageTemplate, T) {
    'use strict';

    var Video = PageTemplate.extend({
        template: _.template( T ),
        activate:function(){
            console.log("activate video");
        },
        deactivate:function(){
            console.log("deactivate video");
        }
    });

    return Video;
});