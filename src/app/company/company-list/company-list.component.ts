import { Component, OnInit } from '@angular/core';
import { AngularFireList} from 'angularfire2/database';
import { Company } from '../../company';
import { CompanyService } from '../company.service';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view/refs';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
   companies$: Observable<any[]>;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
     this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }
}
