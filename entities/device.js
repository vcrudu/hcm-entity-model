var assert = require("assert");
var uuid = require("node-uuid");
var _ = require("underscore");

(function(){
    module.exports = function(args){
        assert.ok(args.model,"Device model is required!");
        assert.ok(args.serialNumber,"Serial number is required!");
        assert.ok(args.manufacturer,"Manufacturer is required!");
        assert.ok(args.deviceType,"Device type is required!");

        var deviceTypes = ["HeartRate","BloodPressure","BloodGlucose",
            "BloodOxygen","RespiratoryRate","Temperature",
            "Weight", "FallDetection","BloodInr","ECG"];

        assert.equal(_.contains(deviceTypes, args.deviceType),true,"Unrecognised device type!");

        var device = {};

        if(args.id) {
            assert.equal(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(args.id),true,"Id is not a valid v4 uuid!");
            device.id = args.id;
        }else{
            device.id = uuid.v4();
        }

        device.model = args.model;
        device.serialNumber = args.serialNumber;
        device.manufacturer = args.manufacturer;
        device.deviceType = args.deviceType;

        device.getDeviceType = function(){
                return deviceTypes;
            };

        return device;
    };
})();