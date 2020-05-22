import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(value => value.PagesModule)
  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(value => value.AuthenticationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
