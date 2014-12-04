define([
    'backbone'
], function (Backbone) {
    'use strict';

    var QuestionPage = Backbone.View.extend({
        el:"#page-container",
        model:null,
        initialize: function () {
            this.model = new Backbone.Model({id:this.id});
            
            if(this.collection) this.collection.add(this.model);
        },
        render: function () {
            this.append();

            //---------Page Navigation-----------//
            this.$el.find("a[data-navigate-to]").unbind("click").click(function(){
                navigateto( $(this).attr("data-navigate-to") );
            });

            this.activate();
        },
        append:function(){
            this.$el.html( this.template() );
        },
        activate:function(){
            //override
        },
        remove:function(){
            this.$el.find("a[data-navigate-to]").unbind("click");

            this.deactivate();
        },
        deactivate:function(){
            //override
        }
    });

    return QuestionPage;
});
