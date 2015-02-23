var assert = require("assert");
var Address = require("./address");
var uuid = require("node-uuid");
var _ = require("underscore");

var RelevantContact = require("./relevantContact");

(function(){
    module.exports = function(args){
        assert.ok(args.name,"Name is required!");
        assert.ok(args.surname,"Surname is required!");
        assert.ok(args.title,"Title is required!");
        assert.ok(args.dateOfBirth,"Date of birth is required!");
        assert.ok(args.gender,"Gender is required!");
        assert.ok(args.ethnicity,"Ethnicity is required!");
        assert.ok(args.nhsNumber,"NHS number is required!");
        assert.ok(args.phone||args.mobile,"Phone or mobile number is required!");
        var patient = {};
        if(args.id) {
            //TODO-HC assert the id is valid v4 uuid
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

        return patient;
    };
})();