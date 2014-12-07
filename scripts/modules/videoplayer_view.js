define([
	'backbone'
], function (Backbone){
    'use strict';

    var VideoPlayerView = Backbone.View.extend({
        video:null,
        poster:null,
        initialize:function(){
            this.poster = this.$el.find(".poster").eq(0);
            this.video = this.$el.find("video").eq(0);

            this.video.attr("type","video/mp4");
            this.video.attr("src",base_url + "videos/src/vacation.mp4");

            //todo switch to webm if mp4 is not supported.

            //todo create poster frame with play button. Hide on mobile.
        }
    });

    return VideoPlayerView;
});