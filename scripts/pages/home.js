define([
    'pages/page',
    'modules/question_view',
    'modules/navigation_view',
    'text!template/home.php'
], function (PageTemplate, QuestionView, Navigationview, T) {
    'use strict';

    var Home = PageTemplate.extend({
        template: _.template( T ),
        activate:function(){
            var _t = this, question_views = [], navigation_view;

            _t.session.resetquestions();

            console.log(_t.session.get("questions"));

            //build question views
            _t.$el.find(".question").each(function(){
                question_views.push( 
                    new QuestionView({ 
                        el:this, 
                        collection:_t.session.get("questions") 
                    })
                );
            });

            navigation_view = new Navigationview({
                el:_t.$el.find("#main-nav-container")[0],
                collection:_t.session.get("questions")
            }).on("buttonclicked", function(_id){
                _t.session.activatequestionbyid(_id);
            }).on("backclicked", function(){
                _t.initprevquestion();
            });

            _t.session.get("questions").on("change:answers_ready", function(_question){
                _t.checkready();
            }).on("change:selection", function(_question){
                setTimeout( function(){ _t.initnextquestion() }, 400);
            }).on("change:story_path", function(_changed_model){
                var newpath =  _changed_model.get("story_path");

                _.each( this.models, function(_model){
                    if(_model != _changed_model) _model.set( "story_path", newpath );
                });
            });
        },
        checkready:function(){
            var _t = this;

            if( _t.session.get("questions").where({"answers_ready":true}).length == _t.session.get("questions").length ){
                _t.ready();
                this.session.activatequestionbyindex(0);
            }
        },
        initnextquestion:function(){
            var nindex = this.session.getactivequestionindex()+1;

            if(nindex > this.session.getnumquestions()-1){
                router.navigate("video", true);
                return null;
            }

            this.session.activatequestionbyindex(nindex);
        },
        initprevquestion:function(){
            var pindex = this.session.getactivequestionindex()-1;

            if(pindex < 0) return null;

            this.session.activatequestionbyindex(pindex);
        },
        deactivate:function(){
            console.log("deactivate home");

            this.$el.find("li a").off("click");
        }
    });

    return Home;
});
