var should = require('should');
var Device = require("../entities/device");

describe("Device", function () {
    describe("defaults", function () {
        var device = {};

        before(function(){
            device = new Device({model:"PT307", serialNumber:"SN12345",
                manufacturer:"A&D Medical", deviceType:"BloodPressure"});
        });

        it("Has model", function () {
            device.model.should.equal("PT307");
        });

        it("Has serial number", function () {
            device.serialNumber.should.equal("SN12345");
        });

        it("Has manufacturer", function () {
            device.manufacturer.should.equal("A&D Medical");
        });

        it("Has deviceType", function () {
            device.deviceType.should.equal("BloodPressure");
        });

    });

    describe("Invalid arguments", function () {
        var device = {};

        before(function(){
            device = new Device({model:"PT307", serialNumber:"SN12345",
                manufacturer:"A&D Medical", deviceType:"BloodPressure"});
        });

        it("Has model", function () {
            device.model.should.equal("PT307");
        });

        it("Has serial number", function () {
            device.serialNumber.should.equal("SN12345");
        });

        it("Has manufacturer", function () {
            device.manufacturer.should.equal("A&D Medical");
        });

        it("Has deviceType", function () {
            device.deviceType.should.equal("BloodPressure");
        });
    });
});