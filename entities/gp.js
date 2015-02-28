var assert = require("assert");
var uuid = require("node-uuid");
var _ = require("underscore");

var Address = require("./address");

(function(){
    module.exports = function(args){
        assert.ok(args.name,"GP name is required!");
        assert.ok(args.practiceName,"Practice Name is required!");
        assert.ok(args.practiceIdentifier,"Practice Identifier is required!");
        var gp = {};

        if(args.id) {
            assert.equals(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(gp.id),true,"Id is not a valid v4 uuid!");
            gp.id = args.id;
        }else{
            gp.id = uuid.v4();
        }

        gp.name = args.name;
        gp.practiceName = args.practiceName;
        gp.practiceIdentifier = args.practiceIdentifier;
        gp.address = new Address(args);

        gp.contactDetails = [];

        gp.addContactDetail = function(contactType, contact){
            assert.ok(contactType, "Contact type is required!");
            assert.ok(contact, "Contact is required!");
            var contactDetail = _.find(this.contactDetails,function(contactType){return contactType.contactType==contactType;});
            if(contactDetail){
                contactDetail.contact = contact;
            }else {
                this.contactDetails.push({contactType: contactType, contact: contact});
            }
        };

        return gp;
    };
})();