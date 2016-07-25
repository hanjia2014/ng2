import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ContactsService } from './contacts.service';
import { Contact } from './contact.model';

@Component({
  selector: 'contacts-list',
  template: `
    <h2>Contacts</h2>
    
    <ul>
      <li *ngFor="let contact of contacts">
        <a [routerLink]="['/contact',  contact.id ]">{{contact.name}}</a>
      </li>
    </ul>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class ContactsListComponent implements OnInit {
  
  contacts: Contact[];

  constructor(private contactsService: ContactsService) {
    
  }
  
  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}