import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './organiser/dashboard/dashboard.component';
import { EventsComponent } from './organiser/events/events.component';
import { ProfileComponent } from './organiser/profile/profile.component';
import { SettingsComponent } from './organiser/settings/settings.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQTeEyrwUuonblZu8k9cCxErVDCw7qn1k'
    })
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    EventsComponent,
    ProfileComponent,
    SettingsComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
