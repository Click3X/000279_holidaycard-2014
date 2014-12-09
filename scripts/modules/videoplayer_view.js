define([
	'backbone'
], function (Backbone){
    'use strict';

    var VideoPlayerView = Backbone.View.extend({
        video:null,
        mobile_video:null,
        poster:null,
        initialize:function(){
            var _t = this;

            _t.poster         = _t.$el.find( "div.poster" ).eq(0);
            _t.video          = _t.$el.find( ".video" )[0];
            _t.mobile_video   = _t.$el.find( ".mobile-video" )[0];
        },
        play:function(){
            this.poster.css("display","none");

            if(mobile){
                $(this.mobile_video).css("opacity","1");
                this.mobile_video.play();
            } else{
                this.video.play();
            }
        },
        pause:function(){
            if(mobile) this.mobile_video.pause();
            else this.video.pause();
        },
        load:function(_url, _type, _thumb){
            var _t = this;

            if(_thumb) _t.poster.attr( "style", "background-image:url(" + _thumb + ")" );

            if(mobile){
                $( _t.video ).remove();
                if(_type) $( _t.mobile_video ).attr( "type", "video/" + _type );
                if(_url) $( _t.mobile_video ).attr( "src", _url );
            } else {
                $( _t.mobile_video ).remove();
                if(_type) $( _t.video ).attr( "type", "video/" + _type );
                if(_url) $( _t.video ).attr( "src", _url );
            }

            _t.poster.click(function(){
                console.log("poster clicked");

                _t.play();
            });
        }
    });

    return VideoPlayerView;
});