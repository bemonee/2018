'use strict';

const PaymentProcessorFactory = require('./factory/PaymentProcessorFactory');
const factory = new PaymentProcessorFactory();

try {
    const stripe = factory.createPaymentProcessor('stripe');
    const charged = stripe.charge();

    console.log(`se cobro ${charged.amount}(${charged.currency})`);
} catch(err) {
    console.log(`Error creando objeto: ${err.toString()}`);
}

try {
    const paypal = factory.createPaymentProcessor('paypal');
    const charged = paypal.charge();

    console.log(`se cobro ${charged.amount}(${charged.currency})`);
} catch(err) {
    console.log(`Error creando objeto: ${err.toString()}`);
}

try {
    const nop = factory.createPaymentProcessor('noExiste');
    const charged = nop.charge();

    console.log(`se cobro ${charged.amount}(${charged.currency})`);
} catch(err) {
    console.log(`Error creando objeto: ${err.toString()}`);
}
