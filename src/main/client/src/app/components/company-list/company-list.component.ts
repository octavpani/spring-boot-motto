import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/common/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list-grid.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];
  currentCategoryId: number = 1;
  searchMode: boolean = false;

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listCompanies();
    });
    
  }
  listCompanies() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchCompanies();
    } else {
      this.handleListCompanies();
    }
    

  }
  handleSearchCompanies() {

    const theKeyword = this.route.snapshot.paramMap.get('keyword')!;

    this.companyService.searchCompanies(theKeyword).subscribe(
      data => {
        this.companies = data;
      }
    );
  }

  handleListCompanies() {
    // check parameter "id"
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      this.currentCategoryId = 1;
    }

    this.companyService.getCompanyList(this.currentCategoryId).subscribe(
      data => {
        this.companies = data;
      }
    )
  }


}
