define([
	'backbone',
    'modules/answer_view'
], function (Backbone, AnswerView) {
    'use strict';

    var QuestionView = Backbone.View.extend({
        initialize:function(){
        	var _t = this;

            _t.id = _t.$el.attr("id");

            if( _t.collection.get(_t.id) ){
                _t.model = _t.collection.get(_t.id);
            } else {
            	_t.model = new Backbone.Model({
                    id:_t.id,
            		selection:null,
                    active:false,
                    story_path:"a",
                    answers:new Backbone.Collection(),
                    answers_ready:false
            	});

                _t.collection.push(_t.model);
            }

            _t.$el.find("li.answer").each(function(){ 
                var answer = new AnswerView( {el:this} );
                _t.model.get("answers").push( answer.model ); 
            });

            _t.model.on("change:story_path",function(){
                _t.updatestorypath();
            });

            _t.model.on("change:active",function(){
                _t.updateactivestate();
            });

            _t.model.get("answers").on("change:ready", function(_answer){
                if( this.where({"ready":true}).length == this.length ){
                    _t.model.set("answers_ready",true);
                }
            });
            
            _t.updatestorypath();
            _t.updateactivestate();
        },
        updateactivestate:function(){
            console.log("updateactivestate", this.model.get("active"));

            if( this.model.get("active") == false ){
                this.$el.removeClass("active");
            } else {
                if( !this.$el.hasClass("active") )
                    this.$el.addClass("active");
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
