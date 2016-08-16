"use strict";
var hero_1 = require('./hero-app/hero');
describe('1st tests', function () {
    var hero1 = new hero_1.Hero();
    hero1.id = 1;
    hero1.name = 'john';
    var hero2 = new hero_1.Hero();
    hero2.id = 1;
    hero2.name = 'john';
    it('true is true', function () { return expect(hero1).toEqual(hero2); });
});
//# sourceMappingURL=test.js.map