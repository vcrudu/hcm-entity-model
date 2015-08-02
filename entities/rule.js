/**
 * Created by Victor on 28/02/2015.
 */
var assert = require("assert");
var uuid = require("node-uuid");
var _ = require("underscore");
var Condition = require("./condition");

(function(){
    module.exports = function(args){
        assert.ok(args.name,"Rule name is required!");
        assert.ok(args.severity,"Severity is required!");

        var rule = {};

        if(args.id) {
            assert.equal(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(args.id),true,"Id is not a valid v4 uuid!");
            rule.id = args.id;
        }else{
            rule.id = uuid.v4();
        }

        rule.name = args.name;
        rule.severity = args.severity;

        rule.conditions=[];

        rule.addCondition=function(measureType, operator, value){
            rule.conditions.push(new Condition({measureType:measureType,operator:operator,value:value}));
        };

        return rule;
    };
})();