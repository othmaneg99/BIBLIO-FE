import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionPageComponent } from './pages/inscription-page/inscription-page.component';
import { ConnectionPageComponent } from './pages/connection-page/connection-page.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [

  { path: '', component: TestComponent },
  { path: 'Inscription', component: InscriptionPageComponent },
  { path: 'Connection', component: ConnectionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
