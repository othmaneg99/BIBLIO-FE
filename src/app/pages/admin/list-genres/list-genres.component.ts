import { Component, OnInit } from '@angular/core';

import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrls: ['./list-genres.component.css']
})
export class ListGenresComponent implements OnInit {
public genres = <any>{};
  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.getGenres()
  }

    private getGenres() {
    this.resourceService.getResource("/genres")
      .subscribe(data => {
        this.genres = data;
      })
  }

    onSaveGenre(data: any) {
    this.resourceService.saveResource("/admin/genre/create", data).subscribe(
      data => {
        
        this.getGenres()
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
    let conf = confirm("vous etes sures de voiloir supprimer le genre : " + g.libelle)

    if (conf) {
      this.resourceService.deleteResource("/admin/genres/"+ g.id).subscribe(
        data => {
          this.getGenres()
        }
      )
    }
  }

//  public onEdit(g:any) {
//   const textFields = document.getElementsByClassName("text");
//   const inputs = document.getElementsByClassName("editInput")

// for (var i = 0; i < textFields.length; i++) {
// if(i == g.id){
  
//       if(textFields && inputs){
//           if(textFields[i].classList.contains('toggleInput')){
//             textFields[i].classList.remove('toggleInput');
//             inputs[i].classList.add('toggleInput');
//         }

//         else {
//            textFields[i].classList.add('toggleInput');
//             inputs[i].classList.remove("toggleInput");
//         }
// }



    
// }

 
            
//   }


//  }

}
