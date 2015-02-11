var assert = require('assert');
var _ = require('underscore');

(function(){
    module.exports = function(args){
        assert.ok(args.fullName, "Full name is required!");
        assert.ok(args.relationship, "Relationship is required!");
        var relevantContact = {};

        relevantContact.fullName = args.fullName;
        relevantContact.relationship = args.relationship;

        relevantContact.contactDetails = [];
        if(args.contactType && args.contact) {
            relevantContact.contactDetails.push({contactType: args.contactType, contact: args.contact});
        }

        relevantContact.addContactDetail = function(contactType, contact){
            assert.ok(args.contactType, "Contact type is required!");
            assert.ok(args.contact, "Contact is required!");
            var contactDetail = _.find(this.contactDetails,function(contactType){return contactType.contactType==contactType;});
            if(contactDetail){
                contactDetail.contact = contact;
            }else {
                this.contactDetails.push({contactType: contactType, contact: contact});
            }
        };

        return relevantContact;
    };
})();