import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Motto } from '../common/motto';

@Injectable({
  providedIn: 'root'
})
export class MottoService {

  private baseUrl = 'http://localhost:8080/api/mottoes';

  private mottoBaseUrl = 'http://localhost:8080/api/companies';

  constructor(private httpClient: HttpClient) { }

  getMottoList(): Observable<Motto[]> {
    return this.httpClient.get<Getresponse>(this.baseUrl).pipe(
      map(response => response._embedded.mottoes)
    );
  }

  getMotto(theCompanyId: number): Observable<Motto> {

    const mottoUrl = `${this.mottoBaseUrl}/${theCompanyId}/motto`;

    return this.httpClient.get<Motto>(mottoUrl);

  }

  getPhrases(motto: Motto): string[] {
    return this.convertPhrases(motto);
  }


  private convertPhrases(motto: Motto): string[] {
    
    const phrases: string[] = [];
    phrases[0] = motto.phrase1;
    phrases[1] = motto.phrase2;
    phrases[2] = motto.phrase3;
    phrases[3] = motto.phrase4;
    phrases[4] = motto.phrase5;
    phrases[5] = motto.phrase6;
    phrases[6] = motto.phrase7;
    phrases[7] = motto.phrase8;
    phrases[8] = motto.phrase9;
    phrases[9] = motto.phrase10;

    return phrases;

  }


}

interface Getresponse {
  _embedded: {
    mottoes: Motto[];
  }
}
