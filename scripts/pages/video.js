/*global define*/

define([
    'pages/page',
    'modules/videoplayer_view',
    'text!template/video.php',
], function (PageTemplate, VideoPlayerView, T) {
    'use strict';

    var Video = PageTemplate.extend({
        template: _.template( T ),
        videoplayer:null,
        activate:function(){
            console.log("activate video");

            this.getCombinedVideo( function(response){
                console.log("start video :", response);

                // this.videoplayer = new VideoPlayerView({
                //     el:this.$el.find(".video-player")[0],
                //     collection:this.session.attributes.questions
                // });

                // this.$el.find(".social-buttons a.fb").click( this.shareonfacebook );
                // this.$el.find(".social-buttons a.tw").click( this.shareontwitter );
            } );
        },
        deactivate:function(){
            console.log("deactivate video");
        },
        getCombinedVideo:function(callback){
            var selections = ["vacation","slopes"];

            $.ajax({
                type: 'POST',
                url: "http://holidays.click3x.com/2014/encoder/combine",
                data: { "selections": JSON.stringify( selections )},
                dataType: "json",
                success: function(response) {
                    console.log(response);

                    callback(response);
                },
                error:function(error){
                    console.log(error);

                    callback(error);
                }
            });
        },
        shareonfacebook:function(){
            console.log("sharing on facebook...");

            FB.ui({
              method: 'share',
              href: base_url + 'video/1234',
            }, function(response){
                console.log("facebook sharing complete: ", response);
            });
        },
        shareontwitter:function(e){
            e.preventDefault();
            
            openpopup( $(e.target).attr("href"), "Share on Twitter", 530, 240 );
        },
    });

    return Video;
}); 