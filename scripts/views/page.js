define([
    'underscore',
    'backbone'
], function (_,Backbone) {
    'use strict';

    var QuestionPage = Backbone.View.extend({
        el:"#page-container",
        model:null,
        html:null,
        initialize: function () {
            this.model = new Backbone.Model({id:this.id});
            if(this.collection) this.collection.add(this.model);
            this.html = this.template();
        },
        render: function () {
            console.log("--rendering " + this.id);

            this.$el.html( this.html );
            this.activate();
        },
        activate:function(){
            //override
        },
        remove:function(){
            console.log("--removing " + this.id);

            this.deactivate();
        },
        deactivate:function(){
            //override
        }
    });

    return QuestionPage;
});
