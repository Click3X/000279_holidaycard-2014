/*global define*/

define([
	'backbone'
], function (Backbone) {
    'use strict';

    var SliderView = Backbone.View.extend({
        initialize:function(){
        	console.log("initialize slider view");

        	var t = this;

        	t.model = new Backbone.Model({
        		"current_slide":0,
        		"slides_length":0
        	});

        	t.slides_ul = t.$el.find("ul.slides").eq(0);

        	t.model.set("slides_length", t.slides_ul.find("li.slide").length );

        	t.model.on("change:current_slide", function(){
        		t.slides_ul.css("margin-left","-" + t.model.get("current_slide")*100 + "%");
        	});

        	t.$el.find("ul.slider-nav li").click(function(){
        		t["show"+$(this).attr("data-id")+"slide"]();
        	});

        	console.log(t.model);
        },
        shownextslide:function(){
        	var curr = this.model.get("current_slide"),
        	next = curr + 1,
        	max = this.model.get("slides_length")-1;

			if(next <= max){
        		this.model.set("current_slide",next);
				console.log("next slide",this.model);
			}
        },
        showprevslide:function(){
        	var curr = this.model.get("current_slide"),
        	prev = curr - 1;

			if(prev >= 0){
        		this.model.set("current_slide",prev);
				console.log("prev slide",this.model);
			}
        }
    });

    return SliderView;
});
