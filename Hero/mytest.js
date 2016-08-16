"use strict";

require(['./hero-app/hero.service'], function (hero_service_1) {
    describe('1st tests', function () {
        var heroService = new hero_service_1.HeroService();
        var heroes = heroService.getHeroes();
        it('true is true', function () { return expect(heroes).not.toEqual(true); });
        it('null is not the same thing as undefined', function () { return expect(null).not.toEqual(undefined); });
    });
});
//# sourceMappingURL=test.js.map