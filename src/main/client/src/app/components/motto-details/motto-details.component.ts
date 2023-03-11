import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/common/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-motto-details',
  templateUrl: './motto-details.component.html',
  styleUrls: ['./motto-details.component.css']
})
export class MottoDetailsComponent implements OnInit {

  company!: Company;
  constructor(private companyService: CompanyService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handCompanyDetails();
    })
  }

  handCompanyDetails() {

    const theCompanyId: number = +this.route.snapshot.paramMap.get('id')!;

    this.companyService.getCompany(theCompanyId).subscribe(
      data => {
        this.company = data;
      }
    )
  }

}
