export default function switchTabHome() {

    const $tabs = $('.tab'),
        $pricingWrapper = $('.pricing_wrapper'),
        ACTIVE_MENU_CLASS = "active_tab",
        FIRST_TAB_INDEX = 0,
        YEARLY_PLAN_CLASS = 'pricing_yearly_plan',
        MODEL_PRICING_PERSONAL_DETAILS = 'pricing_personal_details',
        MODEL_PRICING_PERSONAL = 'pricing_personal',
        ESC_KEY = 27;

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
       Switches the context of payment meta details; company and individual information
       $context is the meta details container element
       Switching the $context class to show and hide company and customer name
     */

    const switchDetailContext = function ($context) {

        if ($context.hasClass(MODEL_PRICING_PERSONAL_DETAILS)) {
            if ($context.hasClass(MODEL_PRICING_PERSONAL)) {
                $context.removeClass(MODEL_PRICING_PERSONAL);
                return;
            }
            $context.addClass(MODEL_PRICING_PERSONAL);
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

        $($context[FIRST_TAB_INDEX]).find(activeTab).removeClass(ACTIVE_MENU_CLASS);
        $clickElement.addClass(ACTIVE_MENU_CLASS);

        if ($('.pricing_modal').is(':visible')) {

            switchDetailContext($context.parent());

            return;

        }
        switchBodyClass();

    };

    $tabs.click(function planTabsClickHandler() {

        const $clickElement = $(this);

        switchTab($clickElement, $clickElement.parent());

    });

    $(document).on('keydown', function (event) {

        if (event.which === ESC_KEY) {

            if ($('.pricing_modal').is(':visible')) {
                $('.pricing_modal').fadeOut();
            }

        }

    });

}