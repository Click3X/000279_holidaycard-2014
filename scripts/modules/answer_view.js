define([
	'backbone'
], function (Backbone){
    'use strict';

    var AnswerView = Backbone.View.extend({
    	events:{
    		"click a":"clicked",
    	},
        initialize:function(){
        	console.log("initialize answer view");

        	var _t = this;

        	_t.model = new Backbone.Model({
        		id: _t.$el.attr("data-selection-id"),
        		image: _t.$el.find("a").eq(0).attr("data-image"),
        		ready: false,
        		visible: false,
        	}).on("change:active", function(){
        		_t.onactivechanged();
        	}).on("change:visible", function(){
        		var i = _t.collection.indexOf(_t.model);

        		if( this.get("visible") == true ){
		    		setTimeout(function(){
		    			_t.$el.css("opacity",1);
		    		}, 200+(200*i) );
        		} else{
					setTimeout(function(){
                        _t.$el.css("opacity",0);
                    }, 200*((_t.collection.length-1)-i) );
        		}
        	});

        	_t.collection.push(_t.model);
        	_t.onactivechanged();
            _t.loadimage();

            // _t.$el.on("tap",function(){
            //     if(mobile == true){
            //         TweenMax.to( _t.$el.find(".answer-inner").eq(0) , .15, { 
            //             opacity:.6, repeat:1, yoyo:true, ease:"linear" 
            //         });
            //     }
            // });
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

            if( this.$el.attr("data-change-path-id") )
                this.trigger("data-change-path", this.$el.attr("data-change-path-id"));

            if( this.$el.attr("data-change-end-id") )
                this.trigger("data-change-end", this.$el.attr("data-change-end-id") );

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