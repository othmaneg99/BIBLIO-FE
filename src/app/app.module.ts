import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionPageComponent } from './pages/inscription-page/inscription-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LivresListComponent } from './pages/livres-list/livres-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent,
    InscriptionPageComponent,
    HomePageComponent,
    LoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UserSidebarComponent,
    AdminSidebarComponent,
    HeaderComponent,
    LivresListComponent
  ],
  imports: [
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    RouterModule.forRoot([
      {path: 'inscription', component: InscriptionPageComponent},
      {path: '', component: HomePageComponent},
      {path: 'user/dashboard', component: UserDashboardComponent},
      {path: 'admin/dashboard', component: AdminDashboardComponent}
    ]),
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
