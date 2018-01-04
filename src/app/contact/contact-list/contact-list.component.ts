import { Component, OnInit } from '@angular/core';
import { AngularFireList} from 'angularfire2/database';
import { Contact } from '../../contact';
import { ContactService } from '../contact.service';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view/refs';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
   contacts$: Observable<any[]>;

  constructor(private companyService: ContactService) { }

  ngOnInit() {
     this.getContacts();
  }

  getContacts() {
    this.contacts$ = this.companyService.getContacts();
  }
}
