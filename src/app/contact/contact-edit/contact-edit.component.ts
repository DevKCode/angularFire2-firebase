import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ContactService } from '../contact.service';
import { Contact } from '../../contact';

import { element } from 'protractor';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
 contactKey: string;
  contact$: Observable<Contact>;
  contactData: Contact = new Contact();


  constructor(
    private contactservice: ContactService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.contactservice.
   // this.contact$ = this.contactservice.contactObject.valueChanges();

  }

  ngOnInit() {
   // console.log(this.activatedRoute.snapshot.queryParams);
    this.activatedRoute.params.subscribe(res => {
      this.contactKey = res.id;

      if (this.contactKey === 'new') {
            console.log('New Entry');
      }else {
           console.log('existing Entry');
           this.contact$ = this.contactservice.getContact(this.contactKey);
      }
    });
   console.log('contact key' + this.contactKey);
  }

  saveContact(contactData: Contact) {

    this.contactservice.saveContact(contactData);
  }
  editContact() {
    this.contactservice.editContact('Dev Edit');
  }
}
