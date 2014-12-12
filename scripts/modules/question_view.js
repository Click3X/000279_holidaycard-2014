define([
	'backbone',
    'modules/answer_view'
], function (Backbone, AnswerView) {
    'use strict';

    var QuestionView = Backbone.View.extend({
        initialize:function(){
        	var _t = this;

            _t.id = _t.$el.attr("id");
           
        	_t.model = new Backbone.Model({
                id:_t.id,
        		selection:null,
                active:false,
                answers:new Backbone.Collection(),
                ready:false,
                story_path:"a",
                story_end:"a"
        	});

            _t.collection.push(_t.model);

            _t.$el.find("li.answer").each(function(){ 
                var answer = new AnswerView( { el:this, collection:_t.model.get("answers") } );
                answer.on("data-change-path",function(_id){
                    //listening for story path event on answer
                    //then set on model
                    _t.model.set("story_path", _id);
                });

                answer.on("data-change-end",function(_id){
                    //listen for story end event on anwser
                    //then set on model
                    _t.model.set("story_end", _id);
                });
            });

            _t.model.on("change:active",function(){
                _t.updateactivestate();
            }).on("change:story_path", function(){
                //listening for story path change on model
                _t.updatestorypath();
            });

            _t.model.get("answers").on("change:ready", function(_answer){
                if( this.where({"ready":true}).length == this.length ){
                    _t.model.set("ready",true);
                }
            }).on("change:active", function(_answer){
                if( _answer.get("active") == true ){
                    _t.model.attributes.selection = "";
                    _t.model.set( "selection", _answer.id );
                }
            });
            
            _t.updatestorypath();
            _t.updateactivestate();
        },
        hideanswers:function(){
            _.each(this.model.get("answers").models, function(_model){
                _model.set( "visible",false );
            });
        },
        updateactivestate:function(){
            console.log("updateactivestate", this.model.get("active"));

            if( this.model.get("active") == false ){
                this.$el.removeClass("active");
            } else {
                if( !this.$el.hasClass("active") )
                    this.$el.addClass("active");

                //fade in answers
                _.each( this.model.get("answers").models, function(_model){
                    _model.set( "visible",true );
                });
            }
        },
        updatestorypath:function(){
            var _t = this;

            _t.$el.find(".path-section").each(function(){
                var pathids = $(this).attr("data-path-id").split(",");

                var i = pathids.indexOf( _t.model.get("story_path") );
                if( i == -1 ){
                    if( !$(this).hasClass("hidden") )
                        $(this).addClass("hidden");
                } else{
                    $(this).removeClass("hidden");
                }
            });
        },
        onanswerclicked:function(e){
            var li = $(e.currentTarget), 
            path_id = li.attr("data-change-path-id"),
            selection = li.attr("data-selection-id");

            if( path_id ) this.model.set("story_path", path_id );

            this.model.set("selection", selection);

            this.trigger("answerclicked");
        }
    });

    return QuestionView;
});
