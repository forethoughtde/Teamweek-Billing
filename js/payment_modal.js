export default function paymentModel() {
  let $payment_modal_open = $(".payment_modal_open");
  let $payment_modal = $(".pricing_modal");

  $payment_modal_open.click(function() {
    $payment_modal.fadeIn();
  });
}
