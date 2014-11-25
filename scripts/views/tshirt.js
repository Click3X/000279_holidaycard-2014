/*global define*/

define([
    'views/page',
    'text!/template/tshirt.php'
], function (PageTemplate, T) {
    'use strict';

    var TShirt = PageTemplate.extend({
        template: _.template( T ),
        activate:function(){
            console.log("activate " + this.id);

            this.$el.find("li a").on("click", function(){
                console.log( "tshirt li clicked");
            });
        },
        deactivate:function(){
            this.$el.find("li a").off("click");

            console.log("deactivate " + this.id);
        }
    });

    return TShirt;
});
