(function(){

    var ACTIVE_MENU_CLASS = "active_tab";
    var $plan_tabs = $('.pricing_plans_tabs--tab');
    var $pricing_wrapper = $('.pricing_wrapper');
    var YEARLY_PLAN_CLASS = 'pricing_yearly_plan';

    $plan_tabs.click(function(){
        if ($(this).hasClass(ACTIVE_MENU_CLASS)) {
            return;
        }
        $('.' + ACTIVE_MENU_CLASS).removeClass(ACTIVE_MENU_CLASS);
        $(this).addClass(ACTIVE_MENU_CLASS);

        if ($pricing_wrapper.hasClass(YEARLY_PLAN_CLASS)) {
            $pricing_wrapper.removeClass(YEARLY_PLAN_CLASS);
        }
        else {
            $pricing_wrapper.addClass(YEARLY_PLAN_CLASS);
        }

    });

})();
