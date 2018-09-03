'use strict';

const PaymentProcessor = require('./PaymentProcessor');

function Stripe() {
    this.charge = function() {
        console.log('cobrando con stipe');

        // Logica suuper compleja
        // ...

        return {
            amount: 10.00,
            currency: 'EUR'
        };
    }
};

Stripe.prototype = new PaymentProcessor();

module.exports = Stripe;