import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireObject, AngularFireList
} from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { Company } from '../company';

@Injectable()
export class CompanyService {
  companies$: Observable<any[]>;
  companiesRef: AngularFireList<any>;

  // company$: Observable<any>;
  companyObject: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
   // this.companyObject = this.db.object('company/companies/1');
   // console.log('company Object' + this.companyObject);

    // this.companies$ = this.db.list('company/companies').valueChanges() as Observable<Company[]>;
      this.companies$ = this.db.list<Company>('company/companies').snapshotChanges()
        .map(changes => {
          return changes.map(c => ({
            key: c.payload.key,
            company: c.payload.val()
          }));
        });
      this.companiesRef = this.db.list<Company>('company/companies');
  }
  getCompanies() {
    return this.companies$;
  }
  getCompany(id: string) {
    this.companyObject = this.db.object('company/companies/' + id);

    return this.companyObject.valueChanges();
  }

  saveCompany(company: Company) {
    // this.companyObject.set({name: 'vd'});
    this.companiesRef.push(company)
    .then(sucess => {
      console.log('sucess' + sucess);
    });
  }

  editCompany(company) {
    this.companyObject
      .update({ phone: 123 })
      .then(sucess => {
        console.log('sucess' + sucess);
      })
      .catch(err => {
        console.log('error' + err);
      });
  }
}
