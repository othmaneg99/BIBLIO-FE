import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../entities/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public isAuthenticated!: boolean;
  public userAuthenticated: any;
  public token!: string;


  constructor(private http: HttpClient) { }

    login(user:User) :Observable<object>{
      console.log(user)
      return this.http.post(environment.hostUrl + "/login",user);
    }

    public isAdmin(user:any) {

        if(user.userRoles == "ADMIN")
          return true;
      
      return false;
    }
}
