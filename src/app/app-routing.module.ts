import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PopupEditProfileComponent } from './popup-edit-profile/popup-edit-profile.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: DashboardComponent
  }, 
  {
    path:'header',
    component: HeaderComponent
  }, 
  {
    path:'popup-edit-profile',
    component: PopupEditProfileComponent
  }, 
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
