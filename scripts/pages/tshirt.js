/*global define*/

define([
    'pages/page',
    'modules/slider_view',
    'text!template/tshirt.php'
], function (PageTemplate, SliderView, T) {
    'use strict';

    var TShirt = PageTemplate.extend({
        template: _.template( T ),
        slider:null,
        order_form:null,
        append:function(){
            // if( this.session.attributes.client ){
            //     this.$el.html( this.template( this.session.attributes.client.attributes ) );
            // }else{
                //this.$el.html( "<h5>Sorry, that is not a valid gift code.</h5>");
                this.$el.html( this.template( {first_name:"Jason", address:"15 Warren St #121", city:"Jersey City", state:"NJ", zip:"07302"} ) );
            //}
        },
        activate:function(){
            console.log("activate " + this.id);
            var _t = this;

            _t.slider = new SliderView({ el:this.$el.find(".slider")[0] });

            _t.order_form = this.$el.find("form#order-form").eq(0);
            _t.order_form.submit(function(e){
                e.preventDefault();

                _t.submitorder();
            });
        },
        deactivate:function(){
            console.log("deactivate " + this.id);

            this.$el.find("li a").off("click");

            this.slider.remove();
        },
        submitorder:function(){
            console.log("submit order!");

            var _t = this;

            $.ajax({
              type: 'POST',
              url: base_url + 'orders/add',
              data: _t.order_form.serialize(),
              dataType:'json'
            }).done(function(result){ 
                console.log("order complete: ", result);
            });
        }
    });

    return TShirt;
});
