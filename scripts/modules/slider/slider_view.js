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

        	t.$el.find("ul.slider-nav-arrows li").click(function(){
        		t["show"+$(this).attr("data-id")+"slide"]();
        	});

            t.$el.find("ul.slider-nav-dots li").click(function(){
                t.showslidebyid( $(this).attr("data-id") );
            });

            this.checkarrows();

        	console.log(t.model);
        },
        showslidebyid:function(_slideid){
            this.model.set("current_slide",_slideid);

            //select dot
            this.$el.find("ul.slider-nav-dots li.active").removeClass("active");
            this.$el.find("ul.slider-nav-dots li[data-id='" + _slideid + "']").addClass("active");

            this.checkarrows();
        },
        checkarrows:function(){
            this.$el.find("ul.slider-nav-arrows li.hidden").removeClass("hidden");
            if( this.lastslide() ) this.hidenextarrow();
            else if(this.firstslide()) this.hideprevarrow();
        },
        hidenextarrow:function(){
            var li = this.$el.find("ul.slider-nav-arrows li[data-id='next']").eq(0);
            if( !li.hasClass("hidden") ) li.addClass("hidden");
        },
        hideprevarrow:function(){
            var li = this.$el.find("ul.slider-nav-arrows li[data-id='prev']").eq(0);
            if( !li.hasClass("hidden") ) li.addClass("hidden");
        },
        firstslide:function(){
            return ( this.model.get("current_slide") == 0 );
        },
        lastslide:function(){
            return ( this.model.get("current_slide") == this.model.get("slides_length")-1 );
        },
        shownextslide:function(){
        	var curr = this.model.get("current_slide"),
        	next = curr + 1,
        	max = this.model.get("slides_length")-1;

			if(next <= max) this.showslidebyid(next);
        },
        showprevslide:function(){
        	var curr = this.model.get("current_slide"),
        	prev = curr - 1;

			if(prev >= 0) this.showslidebyid(prev);
        }
    });

    return SliderView;
});
