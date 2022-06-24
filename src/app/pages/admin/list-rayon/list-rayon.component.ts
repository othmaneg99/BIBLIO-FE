import { Component, OnInit } from '@angular/core';

import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-list-rayons',
  templateUrl: './list-rayon.component.html',
  styleUrls: ['./list-rayon.component.css']
})
export class ListRayonsComponent implements OnInit {
public rayons = <any>{};
  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.getRayons()
  }

    private getRayons() {
    this.resourceService.getResource("/rayons")
      .subscribe(data => {
        this.rayons = data;
      })
  }

    onSaveRayon(data: any) {
    this.resourceService.saveResource("/admin/rayon/create", data).subscribe(
      data => {
        
        this.getRayons()
      }
    )

  }


      public toggle(){
        const collection = document.getElementsByClassName("createform")[0];
        
        if(collection.classList.contains('toggle'))
            collection.classList.remove('toggle');
        else 
            collection.classList.add('toggle');


    }

      onDeleteCategory(g: any) {
    let conf = confirm("vous etes sures de voiloir supprimer le rayon : " + g.libelle)

    if (conf) {
      this.resourceService.deleteResource("/admin/rayons/"+ g.id).subscribe(
        data => {
          this.getRayons()
        }
      )
    }
  }
}