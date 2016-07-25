import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'contacts-detail',
  template: `
    <h2>{{contact.name}}</h2>
  `
})
export class ContactsDetailComponent implements OnInit { 

  constructor(private contactsService: ContactsService, private route: ActivatedRoute) {
    
  }
  
  ngOnInit() {
    this.contact = this.contactsService.getContact(this.route.snapshot.params.id);
  }
}