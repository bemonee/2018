'use strict';

const Stripe = require('../paymentProcessors/Stripe');
const Paypal = require('../paymentProcessors/Paypal');

module.exports = function() {
    this.createPaymentProcessor = function(type) {
        if (type === 'stripe') {
            return new Stripe();
        }

        if (type === 'paypal') {
            return new Paypal();
        }

        throw new Error('Invalid Payment Proccessor');
    }
};