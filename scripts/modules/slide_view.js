define([
	'backbone'
], function (Backbone){
    'use strict';

    var SlideView = Backbone.View.extend({
        initialize:function(){
            var _t = this;

            _t.id = _t.$el.attr("data-slide-id");

            _t.model = new Backbone.Model({
            	id:_t.id,
                ready:false,
                image:_t.$el.attr("data-slide-image"),
                index:_t.$el.index()
            });

            _t.collection.push(_t.model);

            _t.loadimage();
        },
        loadimage:function(){
        	var _t = this, img = new Image();

            img.onload = function(){
            	_t.model.set("ready", true);
            	_t.$el.find("a").eq(0).css( "background-image", "url(" + this.src + ")" );
            	_t.$el.css("opacity","1");

            	console.log("load image complete", _t.model.id);
            }	

            img.src = _t.model.get("image");
        }
    });

    return SlideView;
});