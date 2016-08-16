//our root app component
import {Component} from '@angular/core'

import {Tabs} from './tabs';
import {Tab} from './tab';

@Component({
  selector: 'my-app',
  template: `
    <tabs>
      <tab [tabTitle]="'Tab 1'">Tab 1 Content</tab>
      <tab tabTitle="Tab 2">Tab 2 Content</tab>
    </tabs>
  `,
  directives: [Tabs, Tab]
})
export class App {
  constructor() {
    this.name = 'Angular2'
  }
}