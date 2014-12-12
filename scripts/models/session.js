define([
    'backbone'
], function (Backbone) {
    'use strict';

    var Session = Backbone.Model.extend({
        initialize:function(){
            var _t = this;

            _t.set( "questions", new Backbone.Collection() );
            _t.set( "pages", new Backbone.Collection() );
            _t.set( "client", new Backbone.Model() );   

            _t.set( "data", new Backbone.Model({
                story_end:"a",
                story_path:"a"
            }));         
        },
        //PAGE WORKERS
        activatepagebyid:function(_id){
            _.each( this.attributes.pages.where({active:true}), function(_model){
                _model.set("active",false);
            });

            this.attributes.pages.get(_id).set("active",true);
        },
        getactivepage:function(){
            return this.attributes.pages.where({active:true})[0];
        },
        getactivepageindex:function(_id){
            return this.attributes.pages.indexOf(this.getactivepage());
        },
        getpageidbyindex:function(_index){
            return this.attributes.pages.at(_index).id;
        },
        getnumpages:function(){
            return this.attributes.pages.length;
        },
        //QUESTION WORKERS
        activatequestionbyid:function(_id){
            _.each( this.attributes.questions.where({active:true}), function(_model){
                _model.set("active",false);
            });

            console.log("activatequestionbyid", _id);

            this.attributes.questions.get(_id).set("active",true);
        },
        activatequestionbyindex:function(_index){
           this.activatequestionbyid( this.getquestionidbyindex(_index) );
        },
        deactivateallquestions:function(){
            _.each( this.attributes.questions.models, function(_model){
                _model.set("active",false);
            });
        },
        getactivequestion:function(){
            return this.attributes.questions.where({active:true})[0];
        },
        getactivequestionindex:function(){
            return this.attributes.questions.indexOf(this.getactivequestion());
        },
        getquestionidbyindex:function(_index){
            return this.attributes.questions.at(_index).id;
        },
        getnumquestions:function(){
            return this.attributes.questions.length;
        },
        //CLIENT WORKERS
        setclient:function(_data){
            this.attributes.client.set(_data);
            console.log("client data set: ", this.get("client") );
        },
        resetquestions:function(){
            this.set( "questions", new Backbone.Collection() );
        }
    });

    return Session;
});
