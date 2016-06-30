var AbstractModel = require("core/model/abstract-model").AbstractModel;

exports.VmDeviceGraphics = AbstractModel.specialize({
    _resolution: {
        value: null
    },
    resolution: {
        set: function (value) {
            if (this._resolution !== value) {
                this._resolution = value;
            }
        },
        get: function () {
            return this._resolution;
        }
    }
}, {
    propertyBlueprints: {
        value: [{
            mandatory: false,
            name: "resolution",
            valueObjectPrototypeName: "VmDeviceGraphicsResolution",
            valueType: "object"
        }]
    }
});