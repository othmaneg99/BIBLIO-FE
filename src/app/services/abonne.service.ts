import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbonneService {


  public username!: string;
  public password!: string;

    login(username: string, password: string) {
    return this.http.get(environment.hostUrl + `/api/v1/login`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }));
  }
    createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }
    registerSuccessfulLogin(username:string, password:string) {
    // save the username to session
  }



  constructor(private http: HttpClient) { }
  api = "http://localhost:9090"

  public saveAbonne(abonneData:any) {
    return this.http.post(this.api + '/register', abonneData)
  }


}
