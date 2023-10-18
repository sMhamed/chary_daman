import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { InstallationComponent } from './installation/installation.component';
import { VerificationComponent } from './verification/verification.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'newOrder', component: NewOrderComponent},
  {path: 'installation', component: InstallationComponent},
  {path: 'verification', component: VerificationComponent},
  {path: 'report', component: ReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
