(function(){

    var ACTIVE_MENU_CLASS = "active_plan";
    var $plan_btns = $('.pricing_plan--btn');
    var $pricing_wrapper = $('.pricing_wrapper');

    $plan_btns.click(function(){
        $('.' + ACTIVE_MENU_CLASS).removeClass(ACTIVE_MENU_CLASS);
        $(this).addClass('active_plan');

        if ($pricing_wrapper.hasClass('pricing_yearly_plan')) {
            $pricing_wrapper.removeClass('pricing_yearly_plan');
        }
        else {
            $pricing_wrapper.addClass('pricing_yearly_plan');
        }

    });

})();
