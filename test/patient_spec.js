var should = require('should');
var Patient = require("../entities/patient");
var GP = require("../entities/gp");
var entitiesFactory = require("../index.js");

describe("Patient", function () {
    describe("defaults", function () {
        var patient = {};

        before(function () {
            patient = entitiesFactory.createPatient({
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
    describe("Attach GP",function(){
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
        });

        it("Not accept anything other then GP object",function(){
            patient.attachGP(new GP({name:"Dr. Michael Scott", practiceName:"Rowan Tree Surgery",
                practiceIdentifier:"NHS0121",
                addressLine1:"92 Bathurst Gardens", addressLine2 :"Second floor",
                town:"Great London", county:"London", country:"United Kingdom",
                longitude:-0.158995,latitude:51.519912,
                postCode:"W1H 2JL"}));
        });
    });

    describe("Attach Device",function(){
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
        });

        it("Device object is already attached",function(){
            patient.attachDevice("PT307", "SN12345","A&D Medical", "BloodPressure");
            try {
                patient.attachDevice("PT307", "SN12345","A&D Medical", "BloodPressure");
            }catch(error){
                error.message.should.be.equal("The device is already attached!");
            }
        });

        it("Device type not specified",function(){
            try {
                patient.attachDevice("PT307", "SN12345","A&D Medical");
            }catch(error){
                error.message.should.be.equal('Device type is required!');
            }
        });

        it("Device manufacturer not specified",function(){
            try {
                patient.attachDevice("PT307", "SN12345");
            }catch(error){
                error.message.should.be.equal('Manufacturer is required!');
            }
        });

        it("Device serial number not specified",function(){
            try {
                patient.attachDevice("PT307");
            }catch(error){
                error.message.should.be.equal("Serial number is required!");
            }
        });

        it("Device model not specified",function(){
            try {
                patient.attachDevice();
            }catch(error){
                error.message.should.be.equal("Device model is required!");
            }
        });
    });

    describe("Add health problem",function(){
        var patient = {};
        var today = new Date();
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
        });

        it("Health problem added successfully",function(){
            patient.addHealthProblem("Head Pain", today, "Health problem description.");
            var healthProblems = patient.getHealthProblems();
            healthProblems.should.be.instanceof(Array).and.have.lengthOf(1);
            healthProblems[0].should.be.instanceOf(Object);
            healthProblems[0].problemType.should.be.equal("Head Pain");
            healthProblems[0].date.should.be.equal(today);
            healthProblems[0].description.should.be.equal("Health problem description.");
        });
    });
});