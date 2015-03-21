/**
 * Created by Victor on 07/03/2015.
 */

var Patient = require("../entities/patient");
var GP = require("../entities/gp");
var Address = require("../entities/address");
var Device = require("../entities/device");
var HealthProblem = require("../entities/healthProblem");
var Rule = require("../entities/rule");
var Condition = require("../entities/condition");
var ConditionTemplate = require("../entities/conditionTemplate");
var RelevantContact = require("../entities/relevantContact");

var assert = require("assert");
var uuid = require("node-uuid");
var _ = require("underscore");


(function () {
    module.exports = function (args) {

        var entityFactory = {};

        entityFactory.createPatient =  function(args){
            return new Patient(args);
        };

        entityFactory.createDevice =  function(args){
            return new Device(args);
        };

        entityFactory.createGP =  function(args){
            return new GP(args);
        };

        entityFactory.createAddress =  function(args){
            return new Address(args);
        };

        entityFactory.createRelevantContact =  function(args){
            return new RelevantContact(args);
        };

        entityFactory.createHealthProblem =  function(args){
            return new HealthProblem(args);
        };

        entityFactory.createRule =  function(args){
            return new Rule(args);
        };

        entityFactory.createCondition =  function(args){
            return new Condition(args);
        };

        entityFactory.createConditionTemplate =  function(args){
            return new ConditionTemplate(args);
        };

        return entityFactory;
    };

})();