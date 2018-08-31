// Mi singleton
const clone = require('clone');

module.exports = {
    _config: {},
    _configured: false,
    setConfigured: function (value) {
        this._configured = clone(value);
    },
    getConfigured: function () {
        return this._configured;
    },

    setConfig: function (value) {
        this.setConfigured(true);
        this._config = clone(value);
    },
    getConfig: function (cb) {
        if (!this.getConfigured()) {
            return cb('NOT_CONFIGURED');
        }

        return cb(null, clone(this._config));
    }
};