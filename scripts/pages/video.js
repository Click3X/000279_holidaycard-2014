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

            var _t = this;

            _t.selections = [];
            _.each(_t.session.attributes.questions.models, function(_model){
                _t.selections.push(_model.attributes.selection);
            });

            console.log("SELECTIONS: ", _t.selections);

            _t.videoplayer = new VideoPlayerView({
                el:_t.$el.find(".video-player")[0],
                collection:_t.session.attributes.questions
            });

            _t.getCombinedVideo( function(response){
                console.log("start video :", response);

                if(response.status == "success"){
                    var _type = mp4 ? "mp4" : "webm";
                     _t.videoplayer.load( response[_type].video, _type, "vacation.jpg");

                    _t.$el.find(".social-buttons a.fb").click( _t.shareonfacebook );
                    _t.$el.find(".social-buttons a.tw").click( _t.shareontwitter );
                }
            });
        },
        deactivate:function(){
            console.log("deactivate video");
        },
        getCombinedVideo:function(callback){
            var selections = ["slopes","vacation"];

            $.ajax({
                type: 'POST',
                url: endcoder_url,
                data: { "selections": JSON.stringify( selections )},
                dataType: "json",
                success: function(response){
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