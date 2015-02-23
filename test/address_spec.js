var should = require('should');
var Address = require("../entities/address");

describe("Address", function () {
    describe("defaults", function () {
        var address = {};

        before(function(){
            address = new Address({addressLine1:"92 Bathurst Gardens", addressLine2 :"Second floor",
                town:"Great London", county:"London", country:"United Kingdom",
                longitude:-0.158995,latitude:51.519912,
                postCode:"W1H 2JL"});
        });

        it("Has id", function () {
            /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(address.id).should.be.true;
        });

        it("Has address line 1", function () {
            address.addressLine1.should.equal("92 Bathurst Gardens");
        });

        it("Has address line 2", function () {
            address.addressLine2.should.equal("Second floor");
        });

        it("Has town", function () {
            address.town.should.equal("Great London");
        });

        it("Has county", function () {
            address.county.should.equal("London");
        });

        it("Has country", function () {
            address.country.should.equal("United Kingdom");
        });

        it("Has longitude", function () {
            address.longitude.should.equal(-0.158995);
        });

        it("Has latitude", function () {
            address.latitude.should.equal(51.519912);
        });
    });
});