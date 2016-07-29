import { Component } from '@angular/core';
import {Hero} from "./hero";
import {HeroDetailComponent} from './hero-detail.component';
import {LearnExampleComponent} from './learn-example';
import { HeroService } from './hero.service';
import { SELECT_DIRECTIVES } from './ng2-select/ng2-select';

import { Select2Component } from './select2';

@Component({
    selector: 'my-app',
    templateUrl: `hero-app/hero-list.html`,
    styles: [`
    .hero-selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    .red {
        color: red;
    }
    .green{
        color: green;
    }
  `],
    directives: [HeroDetailComponent, LearnExampleComponent, SELECT_DIRECTIVES, Select2Component],
    providers: [HeroService]
})
export class AppComponent {
    redClass: string = "red";
    greenClass: string = "green";
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    nextId: number;
    onSelect = (hero: Hero) => {
        this.selectedHero = hero;
    }
    getHeroes = () => {
        this.heroService.getHeroes().then((heroes: Hero[]) => { this.heroes = heroes, this.nextId = heroes[heroes.length - 1].id + 1 });
    }
    ngOnInit() {
        this.getHeroes();
    }
    addMyHero(hero: Hero) {
        this.heroes.push(hero);
    }
    public constructor(private heroService: HeroService) {
        
    }

    private value: any;
    selectedItem: any;
    public items = [{ id: 1, text: "Hearing Of Evidence" }, { id: 2, text: "Consideration" }, { id: 3, text: "Free Text" }];
    public selected(value: any): void {
        this.selectedItem = value;
    }

    public removed(value: any): void {
        this.selectedItem == null;
    }

    public refreshValue(value: any): void {
        this.value = value;
    }
}