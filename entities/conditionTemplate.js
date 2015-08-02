/**
 * Created by Victor on 21/03/2015.
 */
var assert = require("assert");
var uuid = require("node-uuid");
var should = require("should");
var _ = require("underscore");

(function(){
    module.exports = function(args){
        var conditionTemplate = {};

        assert.ok(args.name,"Condition template name is required!");
        assert.ok(args.formatedText,"Formatted text is required!");

        var parameterLocations = args.formatedText.match(/\{[0-9]\}/g);

        assert.equal(_.every(parameterLocations, function(par){
            return'{'+parameterLocations.indexOf(par)+'}'===par;
        }),true);

        assert.ok(args.type,"Condition template type is required!");
        assert.ok(args.textParameters,"Text parameters should are required!");
        assert.ok(_.find(types, function(type){
            return type==args.type;
        }), "Unknown condition template type!");

        var parameters = [];

        switch(args.type){
            case 'RangeConditionDefinition':
                conditionTemplate.parameters = ["min value","max value"];
                break;
            case 'SimpleConditionDefinition':
                conditionTemplate.parameters = ["operator","value"];
                break;
            default : throw "Invalid condition template type";
        }

        var types = ['RangeConditionDefinition', 'SimpleConditionDefinition'];
        var operators = [
            {
                "Text": "equal",
                "Value": "Equal"
            },
            {
                "Text": "not equal",
                "Value": "NotEqual"
            },
            {
                "Text": "greater than",
                "Value": "GreaterThan"
            },
            {
                "Text": "greater than or equal",
                "Value": "GreaterThanOrEqual"
            },
            {
                "Text": "less than",
                "Value": "LessThan"
            },
            {
                "Text": "less than or equal",
                "Value": "LessThanOrEqual"
            }
        ];

        conditionTemplate.getConditionTypes = function(){
          return types;
        };

        conditionTemplate.getOperators = function(){
            return operators;
        };

        conditionTemplate.getParameters = function(){
            return parameters;
        };

        if(args.id) {
            assert.equal(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(rule.id),true,"Id is not a valid v4 uuid!");
            conditionTemplate.id = args.id;
        }else{
            conditionTemplate.id = uuid.v4();
        }

        conditionTemplate.name = args.name;
        conditionTemplate.formatedText = args.formatedText;

        return conditionTemplate;
    };
})();
