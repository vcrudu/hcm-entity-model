var assert = require("assert");
var _ = require("underscore");

describe("A Feature", function () {
    describe("a scenarion", function () {
        it("does this thing", function () {
            var parameterLocations= "Blood Pressure Systolic range {0} between {1} and ".match(/\{[0-9]\}/g);
            assert.equal(_.every(parameterLocations, function(par){
                return'{'+parameterLocations.indexOf(par)+'}'===par;
            }),true);
        });
    });
});