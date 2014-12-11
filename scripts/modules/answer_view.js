define([
	'backbone'
], function (Backbone){
    'use strict';

    var AnswerView = Backbone.View.extend({
    	events:{
    		"click a":"clicked"
    	},
        initialize:function(){
        	console.log("initialize answer view");

        	var _t = this;

        	_t.model = new Backbone.Model({
        		"id": _t.$el.attr("data-selection-id"),
        		"image": _t.$el.find("a").eq(0).attr("data-image"),
        		"ready": false
        	}).on("change:active", function(){
        		_t.onactivechanged();
        	});

        	_t.collection.push(_t.model);
        	_t.onactivechanged();
            _t.loadimage();
        },
        loadimage:function(){
        	var _t = this, img = new Image();

            img.onload = function(){
            	_t.model.set("ready", true);
            	_t.$el.find("a").eq(0).css( "background-image", "url(" + this.src + ")" );

            	console.log("load image complete", _t.model.id);
            }	

            img.src = _t.model.get("image");
        },
        clicked:function(e){
        	_.each( this.collection.where({"active":true}), function(_answer){
        		_answer.set("active",false);
        	});

        	this.model.set("active", true);
        },
        onactivechanged:function(){
        	if(this.model.get("active") == true){
        		if( !this.$el.hasClass("active") )
        			this.$el.addClass("active");
        	} else {
        		this.$el.removeClass("active");
        	}
        }
    });

    return AnswerView;
});