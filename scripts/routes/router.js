/*global define*/

define([
    'jquery',
    'easing',
    'backbone',
    'pages/home',
    'pages/video',
    'pages/tshirt',
    'pages/complete',
    'models/session'
], function ($, E, Backbone, Home, Video, TShirt, Complete, Session) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        session:null,
        giftcode_form:null,
    	initialize:function(){
    		console.log("initialize router");
            
            var _t = this;

            _t.session              = new Session();
           
            var page_collection     = _t.session.get("pages"),
            home                    = new Home( {id:"home", session:_t.session, collection:page_collection } ),
            video                   = new Video( {id:"video", session:_t.session, collection:page_collection} ),
            tshirt                  = new TShirt( {id:"tshirt", session:_t.session, collection:page_collection } ),
            complete                = new Complete( {id:"complete", session:_t.session, collection:page_collection } );

            _t.giftcode_form = 
            $("form#giftcode").eq(0).submit(function(e){
                e.preventDefault();
                _t.submitgiftcode();
            });

            _t.start();
    	},
    	start:function(){
    		Backbone.history.start( {pushState:true, hashChange:true, silent:false, root:root_dir} );
    	},
        routes: {
        	':pageid'                           : 'onchangepage',
      		'*actions'                          : 'onchangepage'
        },
        initchangepage:function(_pageid){
            this.navigate(_pageid, true);
        },
        initnextpage:function(){
            var nindex = this.session.getactivepageindex()+1;

            if(nindex > this.session.getnumpages()-1) return null;

            this.initchangepage( this.session.getpageidbyindex(nindex) );
        },
        initprevpage:function(){
            var pindex = this.session.getactivepageindex()-1;

            if(pindex < 0) return null;

            this.initchangepage( this.session.getpageidbyindex(pindex) );
        },
        onchangepage:function(_pageid){
            !_pageid ? _pageid = "home" : null;

        	console.log("Page change:", _pageid);

            /*--- update body tags --*/
            setbodytags();
            
            $("body").addClass("page-" + _pageid);

            this.session.activatepagebyid(_pageid);
	    },
        nextpage:function(){
            this.session.activatenextpage();
        },
        prevpage:function(){
            this.session.activateprevpage();
        },
        submitgiftcode:function(){
            var _t = this;

            $.ajax({
                type: 'POST',
                url: base_url + 'clients/code',
                data: _t.giftcode_form.serialize(),
                dataType:'json'
            }).done(function(result){ 
                console.log("get code complete: ", result.success);

                if(result.success == true){
                    _t.session.setclient(result.data);

                    router.navigate("tshirt", true);
                } else {
                    console.log(result);

                    _t.giftcode_form.find(".error").html(result.error);
                }
            }).error(function(er){
                console.log(er.responseText);
            });
        },
    });

    return RouterRouter;
});
