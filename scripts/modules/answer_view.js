define([
	'backbone'
], function (Backbone){
    'use strict';

    var AnswerView = Backbone.View.extend({
        initialize:function(){
        	console.log("initialize answer view");

        	var _t = this;

        	_t.model = new Backbone.Model({
        		"id": _t.$el.attr("data-selection-id"),
        		"image": _t.$el.find("a").eq(0).attr("data-image"),
        		"ready": false
        	});

            _t.loadimage();
        },
        loadimage:function(){
        	var _t = this, img = new Image();

            img.onload = function(){
            	_t.model.set("ready", true);
            	_t.$el.find("a").eq(0).css( "background-image", "url(" + this.src + ")" );

            	console.log("image complete :", _t.model  );
            }	

            img.src = _t.model.get("image");
        }
    });

    return AnswerView;
});