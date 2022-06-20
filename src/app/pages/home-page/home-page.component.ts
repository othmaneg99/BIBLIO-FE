import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbonneService } from 'src/app/services/abonne.service';

@Component({
  selector: 'app-connection-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {




  constructor(private abonneService: AbonneService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }


}
