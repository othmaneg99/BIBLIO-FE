import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../entities/User';
import {AbonneService} from '../services/abonne.service'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 user:User = new User();

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {

  }


  login(){
    this.authService.login(this.user).subscribe({
      next : (resp) => {
        this.authService.isAuthenticated = true;
        
        if(this.authService.isAdmin(resp)){
          this.router.navigate(['/admin/dashboard'])
        }else {
          this.router.navigate(['/user/dashboard'])
        }

                console.log(resp)
        
      },
      error :() => {
        this.authService.isAuthenticated = false;
      }
    }

    );
  } 

}
