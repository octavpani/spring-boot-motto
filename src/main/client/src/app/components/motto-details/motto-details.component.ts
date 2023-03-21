import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/common/company';
import { Motto } from 'src/app/common/motto';
import { CompanyService } from 'src/app/services/company.service';
import { MottoService } from 'src/app/services/motto.service';

@Component({
  selector: 'app-motto-details',
  templateUrl: './motto-details.component.html',
  styleUrls: ['./motto-details.component.css']
})
export class MottoDetailsComponent implements OnInit {

  company!: Company;
  motto!: Motto;

  phrases: string[] = [];

  constructor(private companyService: CompanyService,
              private mottoService: MottoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleCompanyDetails();
    })
  }

  async handleCompanyDetails() {

    const theCompanyId: number = +this.route.snapshot.paramMap.get('id')!;

    this.companyService.getCompany(theCompanyId).subscribe(
      data => {
        this.company = data;
      }
    )
    
    this.mottoService.getMotto(theCompanyId).subscribe(
      data => {

        this.motto = data;
        console.log(this.motto);

        this.phrases = this.mottoService.getPhrases(this.motto).filter(e => e);
        console.log(this.phrases)
      }
    )
  }
}
