define([
    'backbone'
], function (Backbone) {
    'use strict';

    var Page = Backbone.View.extend({
        el:"#page-container",
        initialize: function(options){
            var _t = this;

            _t.session = options.session;

            _t.model = new Backbone.Model({   
                id:_t.id, 
                active:false
            });

            _t.model.on("change:active",function(){
                if(_t.model.attributes.active == true){
                    _t.render();
                } else {
                    _t.remove();
                }
            });
            
            _t.collection.push( _t.model );

            console.log(_t.page_content);
        },
        render: function () {
            this.append();

            this.model.set("page_content_el", this.$el.find(".page-content").eq(0) );
            this.model.set("page_loader_el", this.$el.find(".spinner").eq(0) );

            //---------Page Navigation-----------//
            this.$el.find("a[data-navigate-to]").unbind("click").click(function(){
                router.navigate( $(this).attr("data-navigate-to"), true );
            });

            this.activate();
        },
        append:function(){
            this.$el.html( this.template() );
        },
        activate:function(){
            //override
        },
        ready:function(){
            console.log("ready");

            this.model.get("page_content_el").addClass("ready");
            this.model.get("page_loader_el").remove();
        },
        remove:function(){
            this.$el.find("a[data-navigate-to]").unbind("click");

            this.deactivate();
        },
        deactivate:function(){
            //override
        }
    });

    return Page;
});
