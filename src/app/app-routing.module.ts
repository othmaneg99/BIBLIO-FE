import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPageComponent } from './pages/inscription-page/inscription-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LivresListComponent } from './pages/livres-list/livres-list.component';
import { ListGenresComponent } from './pages/admin/list-genres/list-genres.component';
import { AdminLivresListComponent } from './pages/admin/admin-livres-list/admin-livres-list.component';



const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'Inscription', component: InscriptionPageComponent },
  { path: 'user/livres', component: LivresListComponent },
  { path: 'admin/genres', component: ListGenresComponent },
  { path: 'admin/livres', component: AdminLivresListComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
