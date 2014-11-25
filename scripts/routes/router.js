/*global define*/

define([
    'jquery',
    'backbone',
    'views/home',
    'views/q2',
    'views/q3',
    'views/q4',
    'views/video',
    'views/tshirt'
], function ($, Backbone, Home, Q2, Q3, Q4, Video, TShirt) {
    'use strict';

    var RouterRouter = Backbone.Router.extend({
        page_views:[],
        main_nav:null,
        selections:null,
        currentpage:{index:0,model:null,page:null},
    	initialize:function(){
    		console.log("initialize router");

            var t = this;

            t.page_models = new Backbone.Collection();
            t.page_models.data = {
                video_path_id:1 
            };

            t.main_nav = $("#main-nav-container .nav").eq(0);

            t.page_views.push( new Home( {id:"home", collection:t.page_models} ));
            t.page_views.push( new Q2( {id:"2", collection:t.page_models} ));
            t.page_views.push( new Q3( {id:"3", collection:t.page_models} ));
            t.page_views.push( new Q4( {id:"4", collection:t.page_models} ));
            t.page_views.push( new Video( {id:"video", collection:t.page_models} ));
            t.page_views.push( new TShirt( {id:"tshirt", collection:t.page_models} ));

            t.page_models.on("change:selection", function(model){
                console.log("selection changed", model.id, model.get("selection"));

                t.nextpage();
            });

            t.page_models.on("change:path-id", function(cmodel){
                console.log("path-id changed", cmodel.id, newpathid);

                var newpathid = cmodel.get("path-id");
                t.page_models.data.video_path_id = newpathid;
            });

            console.log(t.page_models);

            t.start();
    	},
    	start:function(){
    		Backbone.history.start( {pushState: true, hashChange:true, silent:false} );
    	},
        routes: {
        	':pageid'                           : 'onchangepage',
      		'*actions'                          : 'onchangepage'
        },
        initchangepage:function(_pageid){
            this.navigate(_pageid, true);
        },
        onchangepage:function(_pageid){
            !_pageid ? _pageid = "home" : null;

        	console.log("Page change:", _pageid);

            //activate correct nav button;
            $("#main-nav-container .nav li.active").removeClass("active");
            $("#main-nav-container .nav li[data-id=" + _pageid + "]").addClass("active");

            //remove current page
            if(this.currentpage.page) 
                this.currentpage.page.remove();

            this.currentpage.model  = this.page_models.get( _pageid );
            this.currentpage.index  = this.page_models.indexOf( this.currentpage.model );
            this.currentpage.page   = this.page_views[this.currentpage.index];

            console.log(this.currentpage);

            //render new page
            this.currentpage.page.render();
	    },
        nextpage:function(){
            console.log("next page", this.page_views.length);

            if(this.currentpage.index == this.page_views.length-1) return null;
            console.log( this.page_models.at( this.currentpage.index + 1 ).id );

            this.initchangepage( this.page_models.at( this.currentpage.index + 1 ).id );
        }
    });

    return RouterRouter;
});
