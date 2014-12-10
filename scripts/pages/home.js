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

            _t.model.set("navigation_view", navigation_view);
            _t.model.set("question_views", question_views);

            _t.session.get("questions").on("change:answers_ready", function(_question){
                if( this.where({"answers_ready":true}).length == this.length ){
                    _t.ready();
                    _t.transitionin();
                }
            });
        },
        transitionin:function(){
            console.log("transition in");

            this.session.activatequestionbyindex(0);
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
