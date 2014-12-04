/*global define*/

define([
    'views/page',
], function (PageTemplate) {
    'use strict';

    var QPage = PageTemplate.extend({
        activate:function(){
            var t = this;

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

            //click event
            this.$el.find("li a").on("click", function(){
                var li = $(this).parent(), 
                pathid = li.attr("data-path-id"),
                selection_id = li.attr("data-selection-id");

                //check for path-id
                if(pathid !== false && pathid !== undefined){
                   t.model.set("path-id", pathid);
                }

                t.model.set("selection", selection_id);
            });

            t.model.attributes.selection = "";
        },
        deactivate:function(){
            this.$el.find("li a").off("click");
        }
    });

    return QPage;
});
