'use strict';

/**
 * Esta seria una "abstraccion" de un procesador de pagos.
 * Todos los procesadores de pago "heredan" de este e implementan
 * el metodo "charge".
 */
module.exports = function() {
    this.charge = function() {
        throw new Error ('Not Implemented');
    }
};