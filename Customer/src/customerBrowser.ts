import {Component, Input, ViewEncapsulation} from 'angular2/angular2'
import {Customer} from './customerService';
import {CustomerList} from './customerList';
import {CustomerDetail} from './customerDetail';

@Component({
    selector: 'customer-browser',
    template: `
  <div class="row">
    <customer-list [customers]="customers" [(selected)]="selectedCustomer" class="col-xs-4"></customer-list>
    <customer-detail [customer]="selectedCustomer" class="col-xs-8"></customer-detail>
  </div>
  `,
    directives: [CustomerList, CustomerDetail],
    encapsulation: ViewEncapsulation.None
})
export class CustomerBrowser {
    selectedCustomer: Customer;
    @Input() customers: Customer[];
}