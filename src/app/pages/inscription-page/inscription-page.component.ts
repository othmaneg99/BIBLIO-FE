import { Component, OnInit } from '@angular/core';
import { AbonneService } from 'src/app/services/abonne.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription-page',
  templateUrl: './inscription-page.component.html',
  styleUrls: ['./inscription-page.component.css']
})
export class InscriptionPageComponent implements OnInit {

  constructor(private abonneService: AbonneService, private router: Router) { }

  ngOnInit(): void {

  }

  saveAbonne(registerForm: { value: any; }) {
    this.abonneService.saveAbonne(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    )
    }

}
