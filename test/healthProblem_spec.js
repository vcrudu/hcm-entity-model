var should = require('should');
var HealthProblem = require("../entities/healthProblem");

describe("HealthProblem", function () {
    describe("defaults", function () {
        var healthProblem = {};
        var date = new Date();

        before(function(){
            healthProblem = new HealthProblem({problemType:"Head Pain", date:date,
                description:"Health problem description."});
        });

        it("Has id", function () {
             /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(healthProblem.id).should.be.true;
        });

        it("Has problemType", function () {
            healthProblem.problemType.should.equal("Head Pain");
        });

        it("Has description", function () {
            healthProblem.description.should.equal("Health problem description.");
        });
    });
});