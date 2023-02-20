import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Company } from '../common/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://localhost:8080/api/companies';

  constructor(private httpClient: HttpClient) { }

  getCompanyList(): Observable<Company[]> {
    return this.httpClient.get<Getresponse>(this.baseUrl).pipe(
      map(response => response._embedded.companies)
    );
  }
}

interface Getresponse {
  _embedded: {
    companies: Company[];
  }
}