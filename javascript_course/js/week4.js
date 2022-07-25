function billingFunction() {

   // Elements from Shipping infomrmation
   var ship_name = document.getElementById('shippingName');
   var ship_zip_code = document.getElementById('shippingZip');
   // Elements from Billing information
   var bill_name = document.getElementById('billingName');
   var bill_zip_code = document.getElementById('billingZip');
   // Checkbox element
   var is_bill_same = document.getElementById('same').checked;

   if (is_bill_same) {

      bill_name.value = ship_name.value;
      bill_zip_code.value = ship_zip_code.value;

   } else {

      bill_name.value = '';
      bill_zip_code.value = '';

   }

}