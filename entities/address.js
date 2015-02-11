var assert = require("assert");
(function(){
    module.exports = function(args){
        assert.ok(args.addressLine1,"Address line 1 is required!");
        assert.ok(args.addressLine2,"Address line 2 is required!");
        assert.ok(args.town,"Town is required!");
        assert.ok(args.county,"County is required!");
        assert.ok(args.country,"Country is required!");
        assert.ok(args.postCode,"Post code is required!");

        var address = {};
        address.addressLine1 = args.addressLine1;
        address.addressLine2 = args.addressLine2;
        address.town = args.town;
        address.county = args.county;
        address.country = args.country;
        address.postCode = args.postCode;
        address.longitude = args.longitude;
        address.latitude = args.latitude;
        return address;
    };
})();