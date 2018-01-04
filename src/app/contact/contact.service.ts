import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject, AngularFireList
} from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { Contact } from '../contact';

@Injectable()
export class ContactService {
  contacts$: Observable<any[]>;
  contactsRef: AngularFireList<any>;

  // contact$: Observable<any>;
  contactObject: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
   // this.contactObject = this.db.object('contact/contacts/1');
   // console.log('contact Object' + this.contactObject);

    // this.contacts$ = this.db.list('contact/contacts').valueChanges() as Observable<Contact[]>;
      this.contacts$ = this.db.list<Contact>('company/contacts').snapshotChanges()
        .map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            contact: c.payload.val()
          }));
        });
      this.contactsRef = this.db.list<Contact>('company/contacts');
  }
  getContacts() {
    return this.contacts$;
  }
  getContact(id: string) {
    this.contactObject = this.db.object('contact/contacts/' + id);

    return this.contactObject.valueChanges();
  }

  saveContact(contact: Contact) {
    // this.contactObject.set({name: 'vd'});
    this.contactsRef.push(contact)
    .then(sucess => {
      console.log('sucess' + sucess);
    });
  }

  editContact(contact) {
    this.contactObject
      .update({ phone: 123 })
      .then(sucess => {
        console.log('sucess' + sucess);
      })
      .catch(err => {
        console.log('error' + err);
      });
  }
}
