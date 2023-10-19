import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { InstallationComponent } from './components/installation/installation.component';
import { VerificationComponent } from './components/verification/verification.component';
import { ReportComponent } from './components/report/report.component';
import { CustomerSelectionComponent } from './components/customer/customer-selection/customer-selection.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'customerSelection', component: CustomerSelectionComponent},
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
