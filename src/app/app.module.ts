import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InstallationComponent } from './components/installation/installation.component';
import { VehicleIdentificationComponent } from './shared/vehicle-identification/vehicle-identification.component';
import { InstallationTachygrapheComponent } from './components/installation/installation-tachygraphe/installation-tachygraphe.component';
import { TachygrapheIdentificationComponent } from './shared/tachygraphe-identification/tachygraphe-identification.component';
import { VerificationComponent } from './components/verification/verification.component';
import { VerificationTachygrapheComponent } from './components/verification/verification-tachygraphe/verification-tachygraphe.component';
import { InstallationVehicleVerificationComponent } from './components/installation/installation-vehicle-verification/installation-vehicle-verification.component';
import { InstallationTiresComponent } from './components/installation/installation-tires/installation-tires.component';
import { TireInputComponent } from './shared/tire-input/tire-input.component';
import { InstallationSimulationComponent } from './components/installation/installation-simulation/installation-simulation.component';
import { VerificationMetrologicaltestComponent } from './components/verification/verification-metrologicaltest/verification-metrologicaltest.component';
import { VitesseTestComponent } from './components/verification/verification-metrologicaltest/vitesse-test/vitesse-test.component';
import { VerificationTiresComponent } from './components/verification/verification-tires/verification-tires.component';
import { LogoComponent } from './shared/logo/logo.component';
import { ReportComponent } from './components/report/report.component';
import { NewCustomerComponent } from './components/customer/new-customer/new-customer.component';
import { SearchCustomerComponent } from './components/customer/search-customer/search-customer.component';
import { CustomerSelectionComponent } from './components/customer/customer-selection/customer-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewOrderComponent,
    HeaderComponent,
    FooterComponent,

    InstallationComponent,
    VehicleIdentificationComponent,
    InstallationTachygrapheComponent,
    TachygrapheIdentificationComponent,
    VerificationComponent,
    VerificationTachygrapheComponent,
    InstallationVehicleVerificationComponent,
    InstallationTiresComponent,
    TireInputComponent,
    InstallationSimulationComponent,
    VerificationMetrologicaltestComponent,
    VitesseTestComponent,
    VerificationTiresComponent,
    LogoComponent,
    ReportComponent,
    NewCustomerComponent,
    SearchCustomerComponent,
    CustomerSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
