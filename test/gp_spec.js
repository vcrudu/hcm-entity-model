var should = require('should');
var GP = require("../entities/gp");

describe("GP", function () {
    describe("defaults", function () {
        var gp = {};

        before(function(){
            gp = new GP({name:"Dr. Michael Scott", practiceName:"Rowan Tree Surgery",
                practiceIdentifier:"NHS0121",
                addressLine1:"92 Bathurst Gardens", addressLine2 :"Second floor",
                town:"Great London", county:"London", country:"United Kingdom",
                longitude:-0.158995,latitude:51.519912,
                postCode:"W1H 2JL"});
            gp.addContactDetail("Phone","+442022223334");
        });

        it("Has id", function () {
             /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(gp.id).should.be.true;
        });

        it("Has name", function () {
            gp.name.should.equal("Dr. Michael Scott");
        });

        it("Has practice name", function () {
            gp.practiceName.should.equal("Rowan Tree Surgery");
        });

        it("Has practice identifier", function () {
            gp.practiceIdentifier.should.equal("NHS0121");
        });

        it("Has address", function () {
            gp.address.should.be.ok;
            gp.address.addressLine1.should.equal("92 Bathurst Gardens");
            gp.address.addressLine2.should.equal("Second floor");
            gp.address.town.should.equal("Great London");
            gp.address.county.should.equal("London");
            gp.address.country.should.equal("United Kingdom");
            gp.address.longitude.should.equal(-0.158995);
            gp.address.latitude.should.equal(51.519912);
        });

        it("Has contact details", function () {
            gp.contactDetails.should.be.instanceof(Array).and.have.lengthOf(1);
            gp.contactDetails[0].should.be.instanceOf(Object);
            gp.contactDetails[0].contactType.should.be.equal("Phone");
            gp.contactDetails[0].contact.should.be.equal("+442022223334");
        });
    });
});