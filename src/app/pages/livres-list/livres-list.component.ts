import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-livres-list',
  templateUrl: './livres-list.component.html',
  styleUrls: ['./livres-list.component.css']
})
export class LivresListComponent implements OnInit {
public livres = <any>{};
public genres = <any>{};
public editeurs = <any>{};
public rayons = <any>{};
public newForm:any;

  constructor(public resourceService:ResourceService) { }

  ngOnInit(): void {
    this.getArticles("/livre")
    this.getGenres()
    this.getEditeurs()
    this.getRayons()
  }

    private getArticlesByKeyword(mc: any) {
    this.resourceService.getResource('/livre/search?mc=' + mc)
      .subscribe(data => {
        this.livres = data;

      })
  }

  onChercher(value: any) {
    this.getArticlesByKeyword(value.keyword)

  }

    private getArticles(url: any) {
    this.resourceService.getResource(url)
      .subscribe(data => {
        this.livres = data;
        console.log(data)

      })
  }

  private getGenres() {
    this.resourceService.getResource("/genres")
      .subscribe(data => {
        this.genres = data;

      })
  }

    private getEditeurs() {
    this.resourceService.getResource("/editeurs")
      .subscribe(data => {
        console.log(data)
        this.editeurs = data;

      })
  }

      private getRayons() {
    this.resourceService.getResource("/rayons")
      .subscribe(data => {
        console.log(data)
        this.rayons = data;

      })
  }

  public getLivresByGenre(value:any) {

   var d = (<HTMLInputElement>document.getElementById("genreSelect")).value;
       
    const genreId = value.target.value;
    this.resourceService.getResource('/livre/searchbyediteur?genreId=' + genreId)
      .subscribe(data => {
        this.livres = data;

      })

}
  public getLivresByEditeur(value:any) {

   var d = (<HTMLInputElement>document.getElementById("editeurSelect")).value;
       
    const editeurId = value.target.value;
    this.resourceService.getResource('/livre/searchbyediteur?editeurId=' + editeurId)
      .subscribe(data => {
        this.editeurs = data;

      })

}

  public getLivresByRayon(value:any) {

   var d = (<HTMLInputElement>document.getElementById("rayonSelect")).value;
       
    const rayonId = value.target.value;
    this.resourceService.getResource('/livre/searchbyediteur?editeurId=' + rayonId)
      .subscribe(data => {
        this.editeurs = data;

      })

}
refresh() {
this.getArticles("/livre")
}
}
