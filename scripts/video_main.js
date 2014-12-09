'use strict';

/*-----require----- */
require.config({
    baseUrl: base_url,
    paths: {
        jquery:     'scripts/vendor/jquery/jquery.min',
        backbone:   'scripts/vendor/backbone/backbone',
        underscore: 'scripts/vendor/underscore/underscore-min',
        modules:    'scripts/modules'
    }
});

require([
    'modules/videoplayer_view'
], function( VideoPlayer ) {

    /*-----start----- */
    $(document).ready(function(){
        console.log("video scripts ready");
        var videoplayer = new VideoPlayer({
            el:".video-player",
        });

        var _type = mp4 ? "mp4" : "webm";
        videoplayer.load( base_url + "videos/output/" + video_id + "." + _type, _type, thumb );
    });
});
