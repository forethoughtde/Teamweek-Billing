export default function switchTab() {
    const ACTIVE_MENU_CLASS = "active_tab";
    let $plan_tabs = $('.tab');
    let $pricing_wrapper = $('.pricing_wrapper');
    const YEARLY_PLAN_CLASS = 'pricing_yearly_plan';

    function switchTab($clickElement, $context){
        if ($clickElement.hasClass(ACTIVE_MENU_CLASS)) {
            return;
        }
        let activeTab = $('.' + ACTIVE_MENU_CLASS);
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
        let $clickElement = $(this);
        switchTab($clickElement, $clickElement.parent());
    });
}





