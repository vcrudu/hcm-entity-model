var assert = require("assert");
var should = require('should');
var uuid = require("node-uuid");
var _ = require("underscore");

var Address = require("./address");
var RelevantContact = require("./relevantContact");
var GP = require("./gp");
var Device = require("./device");
var HealthProblem = require("./healthProblem");

(function(){
    module.exports = function(args){
        assert.ok(args.email,"Email is required!");
        assert.ok(args.name,"Name is required!");
        assert.ok(args.surname,"Surname is required!");
        assert.ok(args.title,"Title is required!");
        assert.equal(args.dateOfBirth instanceof Date, true, "Date of birth should be Date!");
        assert.ok(args.gender,"Gender is required!");
        assert.ok(args.ethnicity,"Ethnicity is required!");
        assert.ok(args.nhsNumber,"NHS number is required!");
        assert.ok(args.phone||args.mobile,"Phone or mobile number is required!");
        var patient = {};
        if(args.id) {
            assert.equal(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(patient.id),true,"Id is not a valid v4 uuid!");
            patient.id = args.id;
        }else{
            patient.id = uuid.v4();
        }
        patient.name = args.name;
        patient.surname = args.surname;
        patient.title = args.title;
        patient.dateOfBirth = args.dateOfBirth;
        patient.sex = args.sex || args.gender;
        patient.gender = args.gender;
        patient.ethnicity = args.ethnicity;
        patient.nhsNumber = args.nhsNumber;
        patient.weight = args.weight;
        patient.height = args.height;
        if(args.otherIdentifierType && args.otherIdentifier) {
            patient.otherIdentifiers = [{
                otherIdentifierType: args.otherIdentifierType,
                otherIdentifier: args.otherIdentifier
            }];
        } else {
            patient.otherIdentifiers=[];
        }

        patient.phone = args.phone;
        patient.mobile = args.mobile;
        patient.fax = args.fax;
        patient.email = args.email;
        patient.relevantContacts = [];
        patient.communicationPreference = args.communicationPreference;
        patient.address = new Address(args);
        patient.avatar = args.avatar;
        patient.externalId = args.externalId;
        patient.devices = [];
        patient.healthProblems = [];

        patient.getContactPreferences=function (){
                return ['Phone', 'Mobile', 'Email', 'Letter'];
        };

        patient.getId=function (){
            return this.id;
        };

        patient.addRelevantContact=function (args){
            var relevantContact = new RelevantContact(args);
            this.relevantContacts.push(relevantContact);
        };

        patient.addRelevantContactDetail=function (args){
            assert.ok(args.fullName, "Full name should be specified");
            assert.ok(args.contactType,"Contact type should be specified");
            assert.ok(args.contact,"Contact should be specified");
            assert.equal(this.relevantContacts[0].fullName,args.fullName,"mnn");
            var relevantContact = _.find(this.relevantContacts,function(contact){
                return contact.fullName==args.fullName;
            });
            assert.ok(relevantContact, "The relevant contact does not exist!");
            relevantContact.addContactDetail(args.contactType, args.contact);
        };

        patient.attachGP=function(gp){
            gp.should.be.an.instanceOf(Object).and.have.property('name');
            gp.should.be.an.instanceOf(Object).and.have.property('practiceName');
            gp.should.be.an.instanceOf(Object).and.have.property('practiceIdentifier');
            patient.gp=gp;
        };

        patient.attachDevice=function(model,serialNumber,manufacturer,deviceType){
            var existingDevice = _.find(this.devices,function(device){
                return device.serialNumber==serialNumber && device.model==model &&
                device.manufacturer==manufacturer && device.deviceType==deviceType;
            });
            assert.equal(existingDevice,undefined,"The device is already attached!");
            patient.devices.push(new Device({model:model,serialNumber:serialNumber,
                                            manufacturer:manufacturer,deviceType:deviceType}));
        };

        patient.addHealthProblem = function(problemType, date, description){
            var healthProblem = new HealthProblem({problemType:problemType, date:date, description:description});
            patient.healthProblems.push(healthProblem);
        };

        patient.getHealthProblems = function(){
            return patient.healthProblems;
        };

        return patient;
    };
})();