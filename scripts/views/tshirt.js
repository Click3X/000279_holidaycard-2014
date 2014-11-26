/*global define*/

define([
    'views/page',
    'modules/slider/slider_view',
    'text!../template/tshirt.php'
], function (PageTemplate, SliderView, T) {
    'use strict';

    var TShirt = PageTemplate.extend({
        template: _.template( T ),
        slider:null,
        activate:function(){
            console.log("activate " + this.id);

            this.slider = new SliderView({ el:this.$el.find(".slider")[0] });
        },
        deactivate:function(){
            console.log("deactivate " + this.id);

            this.$el.find("li a").off("click");

            this.slider.remove();
        }
    });

    return TShirt;
});
