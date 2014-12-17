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
        form_container:null,
        order_form:null,
        slide_input:null,
        error_span:null,
        append:function(){
            if( this.session.attributes.client.attributes.id ){
                this.$el.html( this.template( this.session.attributes.client.attributes ) );
            }else{
               //this.$el.html( "<h5>Sorry, that's not a valid gift code.</h5>");
               this.$el.html( this.template( {id:"0", first_name:"", address:"", city:"", state:"", zip:""} ) );
            }
        },
        activate:function(){
            var _t = this;

            _t.form_container       = _t.$el.find("#form-container").eq(0);
            _t.order_form           = _t.$el.find("form#order-form").eq(0);
            _t.slide_input          = _t.$el.find("input.design").eq(0);
            _t.error_span           = _t.$el.find("span.error").eq(0);
            _t.state_select         = _t.$el.find("select.state").eq(0);

            _t.slider = new SliderView({ el:this.$el.find(".slider")[0] });
            _t.slider.on("slidechanged", function(_slide_id){
                console.log("slidechanged");

                _t.slide_input.attr("value",_slide_id);
            });

            _t.slider.model.on("change:ready", function(){
                $('body').animate({scrollTop:0}, {duration:500, easing: "easeInOutCubic", complete:function(){
                    _t.ready();
                    _t.slider.activateslidebyindex(0);
                }});
            });

            _t.order_form.submit(function(e){
                e.preventDefault();

                _t.submitorder();
            });

            _t.state_select.val(this.session.attributes.client.attributes.state);
        },
        deactivate:function(){
            this.$el.find("li a").off("click");

            this.slider.remove();
        },
        validate:function(){
            var v = true;

            this.$el.find(".validate").each(function(){
                var input = $(this);

                input.removeClass("error");

                console.log("INPUT:::: ", input.val());

                if( !input.val() || input.val() == "" ){
                    v = false;
                    input.addClass("error");
                }
            });

            return v;
        },
        submitorder:function(){
            var _t = this;

            if( _t.validate() == true ){
                if(!_t.form_container.hasClass("sending")){
                    _t.form_container.addClass("sending");

                    $.ajax({
                      type: 'POST',
                      url: base_url + 'orders/add',
                      data: _t.order_form.serialize(),
                      dataType:'json'
                    }).done(function(result){
                         _t.form_container.removeClass("sending");

                        if(result.success){
                            router.navigate("complete", true);
                        } else {
                             _t.error_span.html(result.error);
                        }

                        console.log("order complete: ", result);
                    });
                }
            }
        }
    });

    return TShirt;
});
