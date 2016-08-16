import { Hero } from './hero-app/hero';
import { HEROES } from './hero-app/mock-heroes';

describe('1st tests', () => {
    var hero1 = new Hero();
    hero1.id = 1;
    hero1.name = 'john';
    var hero2 = new Hero();
    hero2.id = 1;
    hero2.name = 'john';
    it('true is true', () => expect(hero1).toEqual(hero2));
});