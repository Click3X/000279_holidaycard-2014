define([
	'backbone'
], function (Backbone){
    'use strict';

    var VideoPlayerView = Backbone.View.extend({
        video:null,
        mobile_video:null,
        poster:null,
        initialize:function(){
            this.poster         = this.$el.find( "div.poster" ).eq(0);
            this.video          = this.$el.find( ".video" ).eq(0);
            this.mobile_video   = this.$el.find( ".mobile-video" ).eq(0);

            console.log(this.poster);

            //todo switch to webm if mp4 is not supported.
            //todo create poster frame with play button. Hide on mobile.
        },
        load:function(_url, _type, _thumb){
            this.poster.attr( "style", "background-image:url(" + base_url + "images/thumbs/" + _thumb + ")" );

            if(mobile){
                this.video.remove();
                this.mobile_video.attr( "type","video/" + _type );
                this.mobile_video.attr( "src", _url );
            } else {
                this.mobile_video.remove();
                this.video.attr( "type","video/" + _type );
                this.video.attr( "src",_url );
            }
        }
    });

    return VideoPlayerView;
});