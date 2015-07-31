/**
 * Created by Victor on 28/02/2015.
 */
var should = require('should');
var Rule = require("../entities/rule");

describe("Rule", function () {
    describe("defaults", function () {
        var rule = {};

        before(function(){
            rule = new Rule({name:"High temperature", severity:"High"});

        });

        it("Has name", function () {
            rule.name.should.equal("High temperature");
        });

        it("Has severity", function () {
            rule.severity.should.equal("High");
        });
    });

    describe("Missing arguments fields", function () {
        var rule = {};

        it("Severity is required!", function () {
            try{
                rule = new Rule({name:"High temperature"});
            }catch(error){
                error.message.should.equal("Severity is required!");
            }
        });
    });
});