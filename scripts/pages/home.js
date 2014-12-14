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
            _t.$el.find(".question").each(function(i, _this){
                question_views.push( 
                    new QuestionView({ 
                        el:_this, 
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

            _t.session.get("questions").on("change:ready", function(_question){
                if( this.where({"ready":true}).length == this.length ){
                    _t.ready();

                    setTimeout( function(){ 
                        _t.session.activatequestionbyindex(0);
                        _t.showfooter();
                    }, 400 );
                }
            }).on("change:selection", function(_question){
                //hide answers. takes 200ms per answer
                question_views[ _t.session.getactivequestionindex() ].hideanswers();

                console.log("is last question: ", _t.session.islastquestion());

                //scroll to top
                setTimeout(function(){
                    if( $("body").scrollTop() > navigation_view.$el.offset().top - 20 && !_t.session.islastquestion() ){
                        $("body").animate({scrollTop: ( navigation_view.$el.offset().top - 20 ) + "px"}, {duration:500, easing: "easeInOutCubic", complete:function(){
                            _t.initnextquestion();
                        }});
                    } else {
                        _t.initnextquestion();
                    }
                }, _t.session.getactivequestion().get("answers").length*205 );

            }).on("change:story_path", function(_changed_model){
                var newpath =  _changed_model.get("story_path");

                _t.session.get("data").set("story_path", newpath);

                _.each( this.models, function(_model){
                    if(_model != _changed_model) _model.set( "story_path", newpath );
                });
            }).on("change:story_end", function(_changed_model){
                var newend =  _changed_model.get("story_end");

                _t.session.get("data").set("story_end", newend);
            });
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
