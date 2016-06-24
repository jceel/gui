var Montage = require("montage/core/core").Montage;

exports.Container = Montage.specialize({
    _config: {
        value: null
    },
    config: {
        set: function (value) {
            if (this._config !== value) {
                this._config = value;
            }
        },
        get: function () {
            return this._config;
        }
    },
    _description: {
        value: null
    },
    description: {
        set: function (value) {
            if (this._description !== value) {
                this._description = value;
            }
        },
        get: function () {
            return this._description;
        }
    },
    _devices: {
        value: null
    },
    devices: {
        set: function (value) {
            if (this._devices !== value) {
                this._devices = value;
            }
        },
        get: function () {
            return this._devices;
        }
    },
    _enabled: {
        value: null
    },
    enabled: {
        set: function (value) {
            if (this._enabled !== value) {
                this._enabled = value;
            }
        },
        get: function () {
            return this._enabled;
        }
    },
    _id: {
        value: null
    },
    id: {
        set: function (value) {
            if (this._id !== value) {
                this._id = value;
            }
        },
        get: function () {
            return this._id;
        }
    },
    _immutable: {
        value: null
    },
    immutable: {
        set: function (value) {
            if (this._immutable !== value) {
                this._immutable = value;
            }
        },
        get: function () {
            return this._immutable;
        }
    },
    _name: {
        value: null
    },
    name: {
        set: function (value) {
            if (this._name !== value) {
                this._name = value;
            }
        },
        get: function () {
            return this._name;
        }
    },
    _target: {
        value: null
    },
    target: {
        set: function (value) {
            if (this._target !== value) {
                this._target = value;
            }
        },
        get: function () {
            return this._target;
        }
    },
    _template: {
        value: null
    },
    template: {
        set: function (value) {
            if (this._template !== value) {
                this._template = value;
            }
        },
        get: function () {
            return this._template;
        }
    },
    _type: {
        value: null
    },
    type: {
        set: function (value) {
            if (this._type !== value) {
                this._type = value;
            }
        },
        get: function () {
            return this._type;
        }
    }
});