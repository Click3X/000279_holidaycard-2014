define([
	'backbone'
], function (Backbone){
    'use strict';

    var NavigationView = Backbone.View.extend({
    	back_button:null,
        events:{
            "click li": "buttonclicked",
            "click a.back-btn": "backclicked"
        },
        initialize:function(){
        	var _t = this;

        	_t.back_button = _t.$el.find("a.back-btn").eq(0);

        	this.collection.on( "change:active", function(_model){
        		_t.activatebuttonbyid( _model.id ); 

        		if( _model.get("active" ) == true){
	        		if(_t.collection.indexOf(_model) == 0){
	        			_t.hidebackbutton();
	        		} else {
	        			_t.showbackbutton();
	        		}
	        	}
        	});
        },
        activatebuttonbyid:function(_id){
        	var _t = this,
        	_index = _t.collection.indexOf( _t.collection.get(_id) );

        	_t.$el.find("li").each(function(){
        		var li = $(this), 
        		qid = li.attr("data-question-id"), 
        		qindex = _t.collection.indexOf( _t.collection.get(qid) );

        		if( qid == _id ){
        			if( !li.hasClass("active") )
        				li.addClass("active");
        		} else {
        			li.removeClass("active");
        		}

        		if( qindex > _index ){
        			if(!li.hasClass("disabled"))
        				li.addClass("disabled");
        		} else {
        			li.removeClass("disabled");
        		}
        	});
        },
        showbackbutton:function(){
        	this.back_button.removeClass("hidden");
        },
        hidebackbutton:function(){
        	if(!this.back_button.hasClass("hidden"))
        		this.back_button.addClass("hidden");
        },
        buttonclicked:function(e){
        	var li = $(e.currentTarget);

        	if( !li.hasClass("active") && !li.hasClass("disabled") )
        		this.trigger("buttonclicked", li.attr("data-question-id") );
        },
        backclicked:function(){
        	console.log("back clicked");
        	
        	this.trigger("backclicked");
        }
    });

    return NavigationView;
});