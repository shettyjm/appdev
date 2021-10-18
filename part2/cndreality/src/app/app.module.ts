import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CountersComponent } from './components/counters/counters.component';

import { initializeKeycloak } from './init/keycloak-int.factory';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { CovidsafezoneComponent } from './components/covidsafezone/covidsafezone.component';
import { HttpClientModule } from '@angular/common/http';
import { CityranksComponent } from './components/cityranks/cityranks.component';
import { CityrankscorsComponent } from './components/cityrankscors/cityrankscors.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    PortfolioComponent,
    FeedbackComponent,
    FooterComponent,
    NavComponent,
    TestimonialsComponent,
    CountersComponent,
    CovidsafezoneComponent,
    CityranksComponent,
    CityrankscorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: 
  //[]
       [{
    provide:APP_INITIALIZER,
    useFactory:initializeKeycloak,
    multi:true,
    deps:[KeycloakService]
  } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Global environment injectable variables aka env properties

declare global {
  interface Window {
    enableDebug?: any;
    apiUrl?:any;
    KeyCloakUrl?:any;
    KeyCloakRealm?:any;
    KeyCloakClientId?:any;
    threescaleApiUrl?:any;
    threescaleApiCityUrl?:any;
  }
}