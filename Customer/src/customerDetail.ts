import {Component, Input, Output, EventEmitter} from 'angular2/angular2'
import {Customer} from './customerService';

@Component({
    selector: 'customer-detail',
    template: `
  <div class="panel panel-default">
    <div *ng-if="!customer" class="panel-heading">
      <h3 class="panel-title">Select a Customer</h3>
    </div>
    <div *ng-if="customer" class="panel-heading">
      <h3 class="panel-title">{{customer.name.first}} {{customer.name.last}}</h3>
    </div>
    <ul class="list-group" *ng-if="customer">
      <li class="list-group-item">
        <h4 class="list-group-item-heading">First Name</h4>
        <p class="list-group-item-text">{{customer.name.first}}</p>
      </li>
      <li class="list-group-item">
        <h4 class="list-group-item-heading">Last Name</h4>
        <p class="list-group-item-text">{{customer.name.last}}</p>
      </li>
      <li class="list-group-item">
        <h4 class="list-group-item-heading">First Name</h4>
        <p class="list-group-item-text">{{customer.email}}</p>
      </li>
  </ul>
  </div>
  `
})
export class CustomerDetail {
    @Input() customer: Customer

}