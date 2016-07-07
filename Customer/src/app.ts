//our root app component
import {Component, ViewEncapsulation} from 'angular2/angular2'
import {CustomerData} from './customerService';
import {CustomerBrowser} from './customerBrowser';

@Component({
    selector: 'customer-app',
    providers: [CustomerData],
    template: `
  <div class="row">
    <h2>Customer App
  </div>
  <customer-browser [customers]="customers | async" class="row"></customer-browser>
      
  `,
    directives: [CustomerBrowser],
    encapsulation: ViewEncapsulation.None
})
export class App {
    constructor(public customerData: CustomerData) {
        this.customers = customerData.customers;
    }
    saidHello($event) {
        alert(`You said hello to ${$event}`)
    }
}