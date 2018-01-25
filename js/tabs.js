export default function switchTabHome () {

    const $planTabs = $('.tab'),
        $pricingWrapper = $('.pricing_wrapper'),
        ACTIVE_MENU_CLASS = "active_tab",
        FIRST_TAB_INDEX = 0,
        YEARLY_PLAN_CLASS = 'pricing_yearly_plan';

    /*
     * Adds and removes the YEARLY_PLAN_CLASS to body element
     * to change payment context
     */
    const switchBodyClass = function () {

        if ($pricingWrapper.hasClass(YEARLY_PLAN_CLASS)) {

            $pricingWrapper.removeClass(YEARLY_PLAN_CLASS);

        } else {

            $pricingWrapper.addClass(YEARLY_PLAN_CLASS);

        }

    };

    /*
     * Removes ACTIVE_MENU_CLASS from existing active tab
     * Apply ACTIVE_MENU_CLASS to the clicked tab
     * Call switchBodyClass method to change plan context (monthly or yearly)
     * @param {$()} $clickElement clicked tab instance
     * @param {$()} $context clicked tab parent
     */
    const switchTab = function ($clickElement, $context) {

        if ($clickElement.hasClass(ACTIVE_MENU_CLASS)) {

            return;

        }
        const activeClassNameCSS = "".concat('.', ACTIVE_MENU_CLASS);
        const activeTab = $(activeClassNameCSS);

        $($context[FIRST_TAB_INDEX]).find(activeTab).
            removeClass(ACTIVE_MENU_CLASS);
        $clickElement.addClass(ACTIVE_MENU_CLASS);

        if ($('.pricing_modal').is(':visible')) {

            return;

        }
        switchBodyClass();

    };

    $planTabs.click(function planTabsClickHandler () {

        const $clickElement = $( this );

        switchTab($clickElement, $clickElement.parent());

    });

}