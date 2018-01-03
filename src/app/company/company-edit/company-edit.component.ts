import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { CompanyService } from '../company.service';
import { Company } from '../../company';
import { CompanyC } from '../../company-c';
import { element } from 'protractor';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {
  companyKey: string;
  company$: Observable<Company>;
  companyData: CompanyC = new CompanyC();


  constructor(
    private companyservice: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.companyservice.
   // this.company$ = this.companyservice.companyObject.valueChanges();

  }

  ngOnInit() {
   // console.log(this.activatedRoute.snapshot.queryParams);
    this.activatedRoute.params.subscribe(res => {
      this.companyKey = res.id;

      if (this.companyKey  === 'new') {
            console.log('New Entry');
      }else {
           console.log('existing Entry');
           this.company$ = this.companyservice.getCompany(this.companyKey);
      }
    });
   console.log('company key' + this.companyKey);
  }

  saveCompany(companyData: CompanyC) {

    this.companyservice.saveCompany(companyData);
  }
  editCompany() {
    this.companyservice.editCompany('Dev Edit');
  }
}
