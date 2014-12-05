define([
    'pages/page',
    'modules/question_view',
    'modules/navigation_view',
    'text!template/home.php'
], function (PageTemplate, QuestionView, Navigationview, T) {
    'use strict';

    var Home = PageTemplate.extend({
        template: _.template( T ),
        question_views:[],
        navigation:null,
        activate:function(){
            var _t = this;

            //build question views
            _t.$el.find(".question").each(function(){
                var question = new QuestionView({ 
                    el:this, 
                    collection:_t.session.get("questions") 
                }).on("answerclicked", function(_id){
                    _t.initnextquestion();
                });
            });

            _t.navigation = new Navigationview({
                el:_t.$el.find("#main-nav-container")[0],
                collection:_t.session.get("questions")
            }).on("buttonclicked", function(_id){
                _t.session.activatequestionbyid(_id);
            }).on("backclicked", function(){
                _t.initprevquestion();
            });

            _t.session.activatequestionbyindex(0);
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
