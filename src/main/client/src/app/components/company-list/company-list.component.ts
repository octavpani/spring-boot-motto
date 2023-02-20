import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/common/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.listCompanies();
  }
  listCompanies() {
    this.companyService.getCompanyList().subscribe(
      data => {
        this.companies = data;
      }
    )
  }


}
