import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';


import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyService } from './company/company.service';
import { ContactService} from './contact/contact.service';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { Action } from 'rxjs/scheduler/Action';



export const firebaseConfig = {
  apiKey: 'AIzaSyDDQd7Rm7Wramj7cER8631r6tubpjAG9mI',
  authDomain: 'userlist-aa151.firebaseapp.com',
  databaseURL: 'https://userlist-aa151.firebaseio.com',
  projectId: 'userlist-aa151',
  storageBucket: 'userlist-aa151.appspot.com',
  messagingSenderId: '470622221567'
};

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'company-list'},
    {path : 'company-list', component: CompanyListComponent},
    { path: 'company-edit/:id', component: CompanyEditComponent },
    {path: 'contact-list', component: ContactListComponent},
    {path : 'contact-edit/:id', component: ContactEditComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    ContactEditComponent,
    CompanyListComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [CompanyService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
