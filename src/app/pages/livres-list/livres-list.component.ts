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

  constructor(public resourceService:ResourceService) { }

  ngOnInit(): void {
    this.getArticles("/livre")
    this.getGenres()
  }

    private getArticlesByKeyword(mc: any) {
    this.resourceService.getResource('/livre/search?mc=' + mc)
      .subscribe(data => {
        this.livres = data;
        console.log(this.livres)
      })
  }

  onChercher(value: any) {
    this.getArticlesByKeyword(value.keyword)
    console.log("test")
  }

    private getArticles(url: any) {
    this.resourceService.getResource(url)
      .subscribe(data => {
        this.livres = data;
        console.log(this.livres)
      })
  }

  private getGenres() {
    this.resourceService.getResource("/genres")
      .subscribe(data => {
        this.genres = data;
        console.log(this.genres)
      })
  }
}
