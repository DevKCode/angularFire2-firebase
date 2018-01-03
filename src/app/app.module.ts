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
import { CompanyListComponent } from './company/company-list/company-list.component';
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
    { path: 'company-edit/:id', component: CompanyEditComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CompanyEditComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
