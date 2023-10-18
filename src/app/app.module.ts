import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewOrderComponent } from './new-order/new-order.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceSelectionComponent } from './new-order/service-selection/service-selection.component';
import { CustomerSelectionComponent } from './new-order/customer-selection/customer-selection.component';
import { InstallationComponent } from './installation/installation.component';
import { VehicleIdentificationComponent } from './vehicle-identification/vehicle-identification.component';
import { InstallationTachygrapheComponent } from './installation/installation-tachygraphe/installation-tachygraphe.component';
import { TachygrapheIdentificationComponent } from './tachygraphe-identification/tachygraphe-identification.component';
import { VerificationComponent } from './verification/verification.component';
import { VerificationTachygrapheComponent } from './verification/verification-tachygraphe/verification-tachygraphe.component';
import { InstallationVehicleVerificationComponent } from './installation/installation-vehicle-verification/installation-vehicle-verification.component';
import { InstallationTiresComponent } from './installation/installation-tires/installation-tires.component';
import { TireInputComponent } from './tire-input/tire-input.component';
import { InstallationSimulationComponent } from './installation/installation-simulation/installation-simulation.component';
import { VerificationMetrologicaltestComponent } from './verification/verification-metrologicaltest/verification-metrologicaltest.component';
import { VitesseTestComponent } from './verification/verification-metrologicaltest/vitesse-test/vitesse-test.component';
import { VerificationTiresComponent } from './verification/verification-tires/verification-tires.component';
import { LogoComponent } from './logo/logo.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewOrderComponent,
    HeaderComponent,
    FooterComponent,
    ServiceSelectionComponent,
    CustomerSelectionComponent,
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
    ReportComponent
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
