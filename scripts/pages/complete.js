/*global define*/

define([
    'pages/page',
    'text!template/complete.php'
], function (PageTemplate, T) {
    'use strict';

    var Complete = PageTemplate.extend({
        template: _.template( T ),
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