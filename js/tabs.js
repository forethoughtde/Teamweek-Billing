(function(){

    var ACTIVE_MENU_CLASS = "active_tab";
    var $plan_tabs = $('.tab');
    var $pricing_wrapper = $('.pricing_wrapper');
    var YEARLY_PLAN_CLASS = 'pricing_yearly_plan';

    function switchTab($clickElement, $context){
        if ($clickElement.hasClass(ACTIVE_MENU_CLASS)) {
            return;
        }
        var activeTab = $('.' + ACTIVE_MENU_CLASS);
        $($context[0]).find(activeTab).removeClass(ACTIVE_MENU_CLASS);
        $clickElement.addClass(ACTIVE_MENU_CLASS);

        if ($('.pricing_modal').is(':visible')) {
            return;
        }

        switchBodyClass();
    }

    function switchBodyClass(){
        if ($pricing_wrapper.hasClass(YEARLY_PLAN_CLASS)) {
            $pricing_wrapper.removeClass(YEARLY_PLAN_CLASS);
        }
        else {
            $pricing_wrapper.addClass(YEARLY_PLAN_CLASS);
        }
    }


    $plan_tabs.click(function(){
        var $clickElement = $(this);
        switchTab($clickElement, $clickElement.parent());
    });

})();
