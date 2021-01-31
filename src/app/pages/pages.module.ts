import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages.routing.module';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReportsComponent} from './reports/reports.component';
import {ReportDetailComponent} from './report-detail/report-detail.component';
import {ReportDataService} from '../services/report.data.service';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

const MODULES = [CommonModule, PagesRoutingModule, NgbModule, FormsModule, TranslateModule.forChild()];

const COMPONENTS = [HomeComponent, ReportsComponent, ReportDetailComponent];

@NgModule({
  declarations: [...COMPONENTS],
    imports: [...MODULES],
  exports: [...COMPONENTS],
  providers: [ReportDataService]
})
export class PagesModule {
}
