import { DOBAVLJAC_URL } from './../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dobavljac } from '../models/dobavljac';


@Injectable({
  providedIn: 'root'
})
export class DobavljacService {

  constructor(public httpClient: HttpClient) { }

  public getAllDobavljac(): Observable<any> {
    return this.httpClient.get(`${DOBAVLJAC_URL}`);
  }

  public addDobavljac(dobavljac: Dobavljac): Observable<any> {
    dobavljac.id = 0;
    return this.httpClient.post(`${DOBAVLJAC_URL}`, dobavljac);
  }

  public updateDobavljac(dobavljac: Dobavljac): Observable<any> {
    return this.httpClient.put(`${DOBAVLJAC_URL}`, dobavljac);
  }

  public deleteDobavljac(id: number): Observable<any> {
    return this.httpClient.delete(`${DOBAVLJAC_URL}/${id}`);
  }

}
