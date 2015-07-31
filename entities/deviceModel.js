/**
 * Created by home on 29.07.2015.
 */
var assert = require("assert");
var _ = require("underscore");
var url = require("url");



(function(){
    function IsURL(str) {

        var strRegex = "^((https|http|ftp)?://)"
            + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp?user@
            + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP???URL- 199.194.52.184
            + "|" // ??IP?DOMAIN????
            + "([0-9a-z_!~*'()-]+\.)*" // ??- www.
            + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // ????
            + "[a-z]{2,6})" // first level domain- .com or .museum
            + "(:[0-9]{1,4})?" // ??- :80
            + "((/?)|" // a slash isn't required if there is no file name
            + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
        var re = new RegExp(strRegex);
        return re.test(str);
    }

    module.exports = function(args){
        assert.ok(args.model,"Device model is required!");
        assert.ok(args.description,"Description is required!");
        assert.ok(args.price,"Price is required!");
        assert.equal(typeof args.price, "number", "Price is required be a number!");
        assert.ok(args.specifications,"Specifications is required!");
        assert.ok(args.imagesUrls,"Image is required!");

        for(var i=0; i<args.imagesUrls.length; i++){
            var temp = args.imagesUrls[i];
            assert.ok(IsURL(temp), "Image " + temp + " is not URL!");

        }

        assert.ok(args.deviceModelType,"Device type is required!");

        var deviceModelTypes = ["HeartRate","BloodPressure","BloodGlucose",
            "BloodOxygen","RespiratoryRate","Temperature",
            "Weight", "FallDetection","BloodInr","ECG"];

        assert.equal(_.contains(deviceModelTypes, args.deviceModelType),true,"Unrecognised device model type!");

        var deviceModel = {};

        deviceModel.model = args.model;
        deviceModel.description = args.description;
        deviceModel.price = args.price;
        var specifications = args.specifications;
        deviceModel.manufacturerUrl = args.manufacturerUrl;
        var imagesUrls = args.imagesUrls;
        deviceModel.deviceModelType = args.deviceModelType;

        deviceModel.getDeviceModelType = function(){
            return deviceModelTypes;
        };

        deviceModel.getDeviceModelSpecifications = function(){
            return specifications;
        };

        deviceModel.addDeviceModelSpecifications = function(specs){
            for(var i=0; i<specs.length; i++) {
                assert.ok(specs[i] instanceof String,"Should be a string!");
                if(!_.contains(specifications, specs[i]))
                    specifications.push(specs[i]);
            }
        };

        deviceModel.getImagesUrls = function(){
            return imagesUrls;
        };
        deviceModel.addImagesUrls = function(images){
            for(var i=0; i<images.length; i++) {
                assert.ok(images[i] instanceof HTMLImageElement,"Should be a string!");
                if(!_.contains(imagesUrls, images[i]))
                    imagesUrls.push(images[i]);
            }
        };



        return deviceModel;
    };
})();