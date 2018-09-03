'use strict';

const PaymentProcessor = require('./PaymentProcessor');

function Paypal() {
    this.charge = function() {
        console.log('cobrando con paypal');

        // Logica suuper compleja
        // ...

        return {
            amount: 10.00,
            currency: 'USD'
        };
    }
};

Paypal.prototype = new PaymentProcessor();

module.exports = Paypal;