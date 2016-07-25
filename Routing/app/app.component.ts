import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ContactsListComponent } from './contacts-list.component';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Contacts App</h1>
    <ul>
      <li><a [routerLink]="['/']">Contact List</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ContactsService]
})
export class AppComponent { }