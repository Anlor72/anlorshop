fetch('https://anlor-backend.onrender.com/api/paypal-client-id') // ✅ Cambia aquí
    .then(response => response.json())
    .then(data => {
        paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: { value: '1.00', currency_code: 'USD' }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    alert('Payment Completed from ' + details.payer.name.given_name);
                });
            }
        }).render('#paypal-button-container');
    })
    .catch(error => console.error('Error to Load Paypal', error));
