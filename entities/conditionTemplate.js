/**
 * Created by Victor on 21/03/2015.
 */

/**
 * Created by Victor on 28/02/2015.
 */
var assert = require("assert");
var should = require("should");
var uuid = require("node-uuid");
var _ = require("underscore");

(function(){
    module.exports = function(args){
        assert.ok(args.name,"Condition template name is required!");
        assert.ok(args.formatedText,"Formatted text is required!");
        assert.ok(args.type,"Condition template type is required!");

        assert.notEqual(types.indexOf(args.type),-1, "Unknown condition template type!");

        var conditionTemplate = {};

        var types = ['RangeConditionDefinition', 'SimpleConditionDefinition'];

        conditionTemplate.getConditionTypes = function(){
          return types;
        };

        if(args.id) {
            assert.equals(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(rule.id),true,"Id is not a valid v4 uuid!");
            conditionTemplate.id = args.id;
        }else{
            conditionTemplate.id = uuid.v4();
        }

        conditionTemplate.name = args.name;
        conditionTemplate.formatedText = args.formatedText;

        return conditionTemplate;
    };
})();
