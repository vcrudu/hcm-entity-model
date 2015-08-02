/**
 * Created by Victor on 07/03/2015.
 */
/**
 * Created by Victor on 28/02/2015.
 */
var assert = require("assert");
var uuid = require("node-uuid");
var _ = require("underscore");

(function(){
    module.exports = function(args){
        assert.ok(args.measureType, "Measure Type is required!");
        assert.ok(args.operator,"Condition operator is required!");
        assert.ok(args.value, "Condition value is required!");
        assert.ok(_.find(measureTypes, function(measureType){
           return measureType==args.measureType;
        }), "Unsupported measure type!");

        assert.ok(_.find(operators, function(operator){
            return operator==args.operator;
        }), "Unsupported operator!");

        var operators=["==","!=",">",">=","<","<="];
        var measureTypes=["systolicBloodPressure","diastolicBloodPressure",
            "temperature", "bloodOxygen", "weight", "heartRate", "respiratoryRate",
            "bloodGlucose", "bloodInr", "steps", "distance", "calories",
            "elevation", "fall"];

        var condition = {};

        if(args.id) {
            assert.equal(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(condition.id),true,"Id is not a valid v4 uuid!");
            condition.id = args.id;
        }else{
            condition.id = uuid.v4();
        }

        condition.measureType = args.measureType;
        condition.operator = args.operator;
        condition.value = args.value;

        return condition;
    };

})();