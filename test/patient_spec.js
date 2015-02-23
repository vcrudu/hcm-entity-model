var should = require('should');
var Patient = require("../entities/patient");

describe("Patient", function () {
    describe("defaults", function () {
        var patient = {};

        before(function () {
            patient = new Patient({
                    title: "Mr", name: "John", surname: "Smith",
                    dateOfBirth: "01-01-1946", sex: "Male",
                    gender: "Male",
                    ethnicity: "European", nhsNumber: "943 476 5919",
                    otherIdentifierType: "France", otherIdentifier: "12345678",
                    email: "john.smith@test.com", phone: "+373 796 04494", mobile: "+373 796 04494",
                    fax: "+373 796 04494", communicationPreference: "Phone",
                    addressLine1: "92 Bathurst Gardens", addressLine2: "Second floor",
                    town: "Great London", county: "London", country: "United Kingdom",
                    longitude: -0.158995, latitude: 51.519912,
                    postCode: "W1H 2JL"
                }
            );

            patient.addRelevantContact({fullName: "Peter Bowl", relationship: "Friend"});
            patient.addRelevantContactDetail({
                fullName: "Peter Bowl",
                contactType: "Phone",
                contact: "01892345678"
            });
            patient.addRelevantContactDetail({
                fullName: "Peter Bowl",
                contactType: "Mobile",
                contact: "07512345678"
            });
        });

        it("Has id", function () {
            /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(patient.id).should.be.true;
        });

        it("Has name", function () {
            patient.name.should.equal("John");
        });

        it("Has surname", function () {
            patient.name.should.equal("John");
        });

        it("Has title", function () {
            patient.title.should.equal("Mr");
        });

        it("Has date of birth", function () {
            patient.dateOfBirth.should.equal("01-01-1946");
        });

        it("Has patient sex", function () {
            patient.sex.should.equal("Male");
        });

        it("Has gender", function () {
            patient.gender.should.equal("Male");
        });

        it("Has ethnicity", function () {
            patient.ethnicity.should.equal("European");
        });

        it("Has NHS number", function () {
            patient.nhsNumber.should.equal("943 476 5919");
        });

        it("Has other identifier", function () {
            patient.otherIdentifiers.should.be.an.Array;
            patient.otherIdentifiers[0].otherIdentifierType.should.equal("France");
            patient.otherIdentifiers[0].otherIdentifier.should.equal("12345678");
        });

        it("Has address", function () {
        });

        it("Has telephone numbers", function () {
            patient.phone.should.equal("+373 796 04494");
            patient.mobile.should.equal("+373 796 04494");
            patient.fax.should.equal("+373 796 04494");
        });

        it("Has email address", function () {
            patient.email.should.equal("john.smith@test.com");
        });

        it("Has communication preference", function () {
            patient.communicationPreference.should.equal("Phone");
        });

        it("Has relevant contacts", function () {
            patient.relevantContacts.should.be.instanceof(Array).and.have.lengthOf(1);
            patient.relevantContacts[0].should.be.instanceOf(Object);
            patient.relevantContacts[0].fullName.should.be.equal("Peter Bowl");
            patient.relevantContacts[0].relationship.should.be.equal("Friend");
        });

        it("Has address", function () {
            patient.address.should.be.ok;
            patient.address.addressLine1.should.equal("92 Bathurst Gardens");
            patient.address.addressLine2.should.equal("Second floor");
            patient.address.town.should.equal("Great London");
            patient.address.county.should.equal("London");
            patient.address.country.should.equal("United Kingdom");
            patient.address.longitude.should.equal(-0.158995);
            patient.address.latitude.should.equal(51.519912);
        });
    });
});