import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ReportsComponent} from './reports/reports.component';
import {ReportDetailComponent} from './report-detail/report-detail.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'reports/view/:id', component: ReportDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule {
}
