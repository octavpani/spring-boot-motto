import { Component, OnInit } from '@angular/core';
import { Industry } from 'src/app/common/industry';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-industry-menu',
  templateUrl: './industry-menu.component.html',
  styleUrls: ['./industry-menu.component.css']
})
export class IndustryMenuComponent implements OnInit {

  industryList: Industry[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.listIndustry();
  }
  listIndustry() {
    this.companyService.getIndustry().subscribe(
      data => {
        console.log('Industry=' + JSON.stringify(data));
        this.industryList = data;
      }
    )
  }

}
