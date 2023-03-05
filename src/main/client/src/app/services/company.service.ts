import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Company } from '../common/company';
import { Industry } from '../common/industry';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://localhost:8080/api/companies';

  private industryUrl = 'http://localhost:8080/api/industry';


  constructor(private httpClient: HttpClient) { }

  getCompanyList(theCategoryId: number): Observable<Company[]> {

    const searchUrl = `${this.baseUrl}/search/findByIndustryId?id=${theCategoryId}`;

    return this.getCompanies(searchUrl);
  }

  getIndustry(): Observable<Industry[]> {
    return this.httpClient.get<GetResponseIndustry>(this.industryUrl).pipe(
      map(response => response._embedded.industry)
    );
  }

  searchCompanies(theKeyword: string): Observable<Company[]>{
    const searchUrl = `${this.baseUrl}/search/findByCompanyNameContaining?name=${theKeyword}`;

    return this.getCompanies(searchUrl);

  }

  // helper method
  private getCompanies(searchUrl: string): Observable<Company[]> {
    return this.httpClient.get<GetResponseCompany>(searchUrl).pipe(
      map(response => response._embedded.companies)
    );
  }
}

interface GetResponseCompany {
  _embedded: {
    companies: Company[];
  }
}

interface GetResponseIndustry {
  _embedded: {
    industry: Industry[];
  }
}