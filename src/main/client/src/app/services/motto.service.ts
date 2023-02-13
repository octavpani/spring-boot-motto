import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Motto } from '../common/motto';

@Injectable({
  providedIn: 'root'
})
export class MottoService {

  private baseUrl = 'http://localhost:8080/api/mottoes';

  constructor(private httpClient: HttpClient) { }

  getMottoList(): Observable<Motto[]> {
    return this.httpClient.get<Getresponse>(this.baseUrl).pipe(
      map(response => response._embedded.mottoes)
    );
  }
}

interface Getresponse {
  _embedded: {
    mottoes: Motto[];
  }
}
