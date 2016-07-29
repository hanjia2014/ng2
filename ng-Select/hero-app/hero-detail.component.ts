import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
              <h2>{{hero.name}} - details:</h2>
              <div><label>id: </label>{{hero.id}}</div>
              <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
              </div>
              <input (click)="pushMyHero(hero)" value="Output Test" type="button"/>
            </div>
            `
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
    @Input()
    newId: number;
    @Output() myOutput = new EventEmitter<Hero>();
    pushMyHero(hero: Hero) {
        this.myOutput.next({id: this.newId, name: hero.name + " output test"});
    }
}