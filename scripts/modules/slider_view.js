define([
	'backbone',
    'modules/slide_view'
], function (Backbone, SlideView) {
    'use strict';

    var SliderView = Backbone.View.extend({
        initialize:function(){
        	var _t = this;

            _t.collection = new Backbone.Collection();
            _t.model = new Backbone.Model({
                ready:false
            });

        	_t.slides_ul = _t.$el.find("ul.slides").eq(0);
            
            //build slide views            
        	_t.slides_ul.find("li.slide").each(function(){
                var slide_view = new SlideView({
                    el:this,
                    collection:_t.collection
                });
            });

        	_t.collection.on("change:active", function(_model){
                if(_model.get("active") == true){
                    var _index = _model.get("index");

                    _t.slides_ul.css("margin-left","-" + _index*100 + "%");
                    _t.selectdotbyid(_model.id);
                    _t.checkarrows(_index);
                }
        	}).on("change:ready", function(){
                if( this.where({"ready":true}).length == this.length ){
                    _t.model.set("ready",true);
                }
            });

        	_t.$el.find("ul.slider-nav-arrows li").click(function(){
        		_t["show"+$(this).attr("data-id")+"slide"]();
        	});

            _t.$el.find("ul.slider-nav-dots li").click(function(){
                _t.activateslidebyid( $(this).attr("data-slide-id") );
            });
        },
        activateslidebyindex:function(_index){
            var _model = this.collection.at(_index);
            if(_model) this.activateslidebyid( _model.id );
        },
        activateslidebyid:function(_id){
            _.each(this.collection.models, function(_model){
                _model.set("active",_id == _model.id);
            });

            // this.trigger("slidechanged", _id);
        },
        selectdotbyid:function(_id){
            this.$el.find("ul.slider-nav-dots li.active").removeClass("active")  ;
            this.$el.find("ul.slider-nav-dots li[data-slide-id='" + _id + "']").addClass("active");
        },
        shownextslide:function(){
            var nextindex = this.getactivemodel().get("index") + 1,
            next_model = this.collection.at( nextindex );

			if(next_model) this.activateslidebyid( next_model.id );
        },
        showprevslide:function(){
        	var previndex = this.getactivemodel().get("index") - 1,
            prev_model = this.collection.at( previndex );

            if(prev_model) this.activateslidebyid( prev_model.id );
        },
        checkarrows:function(_active_index){
            this.$el.find("ul.slider-nav-arrows li.hidden").removeClass("hidden");

            if( _active_index == this.collection.length-1 ) this.hidenextarrow();
            else if(_active_index == 0) this.hideprevarrow();
        },
        hidenextarrow:function(){
            var li = this.$el.find("ul.slider-nav-arrows li[data-id='next']").eq(0);
            if( !li.hasClass("hidden") ) li.addClass("hidden");
        },
        hideprevarrow:function(){
            var li = this.$el.find("ul.slider-nav-arrows li[data-id='prev']").eq(0);
            if( !li.hasClass("hidden") ) li.addClass("hidden");
        },
        getactivemodel:function(){
            return this.collection.where( {"active":true} )[0];
        },
        disable:function(){
            this.$el.addClass("disabled");
        }
    });

    return SliderView;
});
