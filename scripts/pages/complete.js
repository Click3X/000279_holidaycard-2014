/*global define*/

define([
    'pages/page',
    'text!template/complete.php'
], function (PageTemplate, T) {
    'use strict';

    var Complete = PageTemplate.extend({
        template: _.template( T ),
        activate:function(){
            var _t = this;
            
            $('body').animate({scrollTop:0}, {duration:500, easing: "easeInOutCubic", complete:function(){
                _t.ready();
            }});
        },
        append:function(){
            if( this.session.attributes.client.attributes.id ){
                this.$el.html( this.template( this.session.attributes.client.attributes ) );
            }else{
                this.$el.html( "<h5>Sorry, somehow I've lost track of your order. Please give us a call at 212-627-1900.</h5>");
            }
        }
    });

    return Complete;
});
