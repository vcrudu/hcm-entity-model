/**
 * Created by Victor on 28/02/2015.
 */
var assert = require("assert");
var uuid = require("node-uuid");
var _ = require("underscore");

(function(){
    module.exports = function(args){
        assert.ok(args.problemType,"Problem type is required!");
        assert.ok(args.date," Date is required!");
        assert.ok(args.description,"Problem description is required!");

        var healthProblem = {};

        if(args.id) {
            assert.equal(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(healthProblem.id),true,"Id is not a valid v4 uuid!");
            healthProblem.id = args.id;
        }else{
            healthProblem.id = uuid.v4();
        }

        healthProblem.problemType = args.problemType;
        healthProblem.date = args.date;
        healthProblem.description = args.description;
        return healthProblem;
    };
})();