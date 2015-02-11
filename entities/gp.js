var assert = require("assert");
(function(){
    module.exports = function(args){
        assert.ok(args.name,"GP name is required!");
        assert.ok(args.practiceName,"Practice Name is required!");
        assert.ok(args.practiceIdentifier,"Practice Identifier is required!");
        var gp = {};

        gp.name = args.name;
        gp.practiceName = args.practiceName;
        gp.practiceIdentifier = args.practiceIdentifier;
        gp.address = new Address(args);

        gp.contactDetails = [];

        gp.addContactDetail(args.contactType, args.contact);

        gp.addContactDetail = function(contactType, contact){
            assert.ok(args.contactType, "Contact type is required!");
            assert.ok(args.contact, "Contact is required!");
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