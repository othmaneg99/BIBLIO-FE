import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AbonneService {

  constructor(private http: HttpClient) { }
  api = "http://localhost:9090"
  public saveAbonne(abonneData:any) {
    return this.http.post(this.api + '/register', abonneData)
  }
}
