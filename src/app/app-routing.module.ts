import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './list/list.component';
import {HomeComponent} from './home/home.component';
import {MapViewComponent} from './map-view/map-view.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'reportes',
    component: ListComponent
  },
  {
    path: 'reportes/view/:id',
    component: MapViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
