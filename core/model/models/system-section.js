var AbstractModel = require("core/model/abstract-model").AbstractModel;

exports.SystemSection = AbstractModel.specialize({
    _identifier: {
        value: null
    },
    identifier: {
        set: function (value) {
            if (this._identifier !== value) {
                this._identifier = value;
            }
        },
        get: function () {
            return this._identifier;
        }
    },
    _label: {
        value: null
    },
    label: {
        set: function (value) {
            if (this._label !== value) {
                this._label = value;
            }
        },
        get: function () {
            return this._label;
        }
    },
    _icon: {
        value: null
    },
    icon: {
        set: function (value) {
            if (this._icon !== value) {
                this._icon = value;
            }
        },
        get: function () {
            return this._icon;
        }
    },
    _order: {
        value: null
    },
    order: {
        set: function (value) {
            if (this._order !== value) {
                this._order = value;
            }
        },
        get: function () {
            return this._order;
        }
    }
}, {
    propertyBlueprints: {
        value: [{
            mandatory: false,
            name: "identifier"
        }, {
            mandatory: false,
            name: "label"
        }, {
            mandatory: false,
            name: "icon"
        }, {
            mandatory: false,
            name: "order"
        }]
    }
});
