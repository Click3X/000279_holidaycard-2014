define([
    'backbone'
], function (Backbone) {
    'use strict';

    var Page = Backbone.View.extend({
        el:"#page-container",
        model:null,
        initialize: function(options){
            var _t = this;

            _t.session = options.session;

            _t.model = new Backbone.Model( { id:_t.id, active:false } );
            _t.model.on("change:active",function(){
                if(_t.model.attributes.active == true){
                    _t.render();
                } else {
                    _t.remove();
                }
            });
            
            _t.collection.push( _t.model );
        },
        render: function () {
            this.append();

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
