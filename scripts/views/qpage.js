/*global define*/

define([
    'views/page',
], function (PageTemplate) {
    'use strict';

    var QPage = PageTemplate.extend({
        activate:function(){
            console.log("activate " + this.id);
            var t = this;

            console.log( this.$el.find(".path-section").length );
            console.log( "current path id for page :", t.id, " is ", t.collection.data.video_path_id);
           
            //hide unapplicable sections
            var sections = this.$el.find(".path-section");
            if( sections.length > 1 ){
                sections.each(function(){
                    var section = $(this),
                    pathid = section.attr("data-path-id");

                    if(parseInt(pathid) == parseInt(t.collection.data.video_path_id)){
                        section.removeClass("hidden");
                    } else {
                        if(!section.hasClass("hidden"))
                            section.addClass("hidden")
                    }   
                });
            }

            this.$el.find("li a").on("click", function(){
                var li = $(this).parent(), 
                ci = li.index(),
                pathid = li.attr("data-path-id");

                console.log( t.id, " li clicked", ci );

                //check for path-id
                if(pathid !== false && pathid !== undefined){
                   t.model.set("path-id", pathid);
                }

                t.model.set("selection", ci);
            });

            t.model.attributes.selection = "";
        },
        deactivate:function(){
            this.$el.find("li a").off("click");

            console.log("deactivate " + this.id);
        }
    });

    return QPage;
});
