import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin-livres-list',
  templateUrl: './admin-livres-list.component.html',
  styleUrls: ['./admin-livres-list.component.css']
})
export class AdminLivresListComponent implements OnInit {
closeResult: string | undefined;
public livres = <any>{};
public genres = <any>{};
public editeurs = <any>{};
public rayons = <any>{};
public newForm:any;
public l = <any>{};
  constructor(public resourceService:ResourceService,private modalService: NgbModal) { }

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

        this.editeurs = data;

      })
  }

      private getRayons() {
    this.resourceService.getResource("/rayons")
      .subscribe(data => {

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
      onDeleteLivre(l: any) {
    let conf = ("vous etes sures de vouloir supprimer le livre : " + l.titre + "?")

    if (conf) {
      this.resourceService.deleteResource("/livre/delete/"+ l.id).subscribe(
        data => {
          this.getArticles("/livre")
        }
      )
    }
  }
refresh() {
this.getArticles("/livre")
}

  openLg(content:any,l:any) {
          this.l = l;
      console.log(l)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
