import {Component, Input, Output, EventEmitter} from 'angular2/angular2'
import {Customer} from './customerService';

@Component({
    selector: 'customer-list',
    template: `
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Customers</h3>
    </div>
    <ul class="nav nav-pills nav-stacked">
      <li 
        *ng-for="#customer of customers"
        role="presentation"
        [class.active]="selected == customer">
        <a (click)="selectedChange.next(customer)">{{customer.name.first}} {{customer.name.last}}</a></li>
    </ul>
  </div>
  `
})
export class CustomerList {
    @Input() customers: Customer[];
    @Input() selected: Customer
    @Output() selectedChange: EventEmitter<Customer> = new EventEmitter();
}