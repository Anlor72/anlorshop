function initializePayPalButton() {
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: { value: '0.10', currency_code: 'USD' }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert('Completed Payment from' + details.payer.name.given_name);
            });
        }
    }).render('#paypal-button-container');
}
