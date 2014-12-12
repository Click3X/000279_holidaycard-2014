/*global define*/

define([
    'pages/page',
    'text!template/complete.php'
], function (PageTemplate, T) {
    'use strict';

    var Complete = PageTemplate.extend({
        template: _.template( T ),
        activate:function(){
            $('body').animate({scrollTop:0}, {duration:400, easing: "easeInOutQuart", complete:function(){
                _t.videoplayer = new VideoPlayerView({
                    el:_t.$el.find(".video-player")[0],
                    collection:_t.session.attributes.questions
                });

                this.ready();
            }});
        },
        append:function(){
            if( this.session.attributes.client.attributes.first_name ){
                this.$el.html( this.template( this.session.attributes.client.attributes ) );
            }else{
                this.$el.html( "<h5>Sorry, somehow I've forgotten your name.</h5>");
            }
        }
    });

    return Complete;
});
