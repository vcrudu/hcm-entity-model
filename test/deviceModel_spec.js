var should = require('should');
var DeviceModel = require("../entities/deviceModel");

describe("DeviceModel", function () {
    describe("defaults", function () {
        var deviceModel = {};

        before(function () {
            deviceModel = new DeviceModel({
                model: "PT307", description: "SN12345", price: 2.95,
                specifications : ["Negru", "Alb"], manufacturerUrl: "http://example.com",
                imagesUrls: ["http://image1.jpg", "http://image2.jpg"], deviceModelType: "BloodPressure"
            });
        });
        it("Has model", function () {
            deviceModel.model.should.equal("PT307");
        });

        it("Has description", function () {
            deviceModel.description.should.equal("SN12345");
        });

        it("Has price", function () {
            deviceModel.price.should.equal(2.95);
        });

        it("Has specifications", function () {
            var temp = deviceModel.getDeviceModelSpecifications();
            temp.length.should.equal(2);
            temp[0].should.equal("Negru");
            temp[1].should.equal("Alb");
        });

        it("Has images", function () {
            var temp = deviceModel.getImagesUrls();
            temp.length.should.equal(2);
            temp[0].should.equal("http://image1.jpg");
            temp[1].should.equal("http://image2.jpg");
        });


        it("Has manufacturerUrl", function () {
            deviceModel.manufacturerUrl.should.equal("http://example.com");
        });

        it("Has deviceType", function () {
            deviceModel.deviceModelType.should.equal("BloodPressure");
        });
    });


});


