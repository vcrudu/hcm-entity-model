var assert = require("assert");
var uuid = require("node-uuid");
(function(){
    module.exports = function(args){
        assert.ok(args.addressLine1,"Address line 1 is required!");
        assert.ok(args.town,"Town is required!");
        assert.ok(args.county,"County is required!");
        assert.ok(args.country,"Country is required!");
        assert.ok(args.postCode,"Post code is required!");

        var address = {};
        if(args.id) {
            assert.equal(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(args.id),true,"Id is not a valid v4 uuid!");
            address.id = args.id;
        }else{
            address.id = uuid.v4();
        }

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