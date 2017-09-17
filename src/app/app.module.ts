import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventsComponent } from './components/organiser/events/events.component';
import { ProfileComponent } from './components/organiser/profile/profile.component';
import { SettingsComponent } from './components/organiser/settings/settings.component';
import { AuthService } from './services/auth.service'
import { ValidatorService } from './services/validator.service';
import { NavComponent } from './components/nav/nav.component'
import { AuthGuard } from './services/authguard.service'
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { CreateEventComponent } from './components/organiser/create-event/create-event.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: IndexComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent},
  { path: 'events', component: EventsComponent , canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent , canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard] },
  { path: 'create-event', component: CreateEventComponent , canActivate: [AuthGuard] }
  //{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQTeEyrwUuonblZu8k9cCxErVDCw7qn1k'
    }),
    AgmSnazzyInfoWindowModule,
    ImageUploadModule.forRoot()
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    ProfileComponent,
    SettingsComponent,
    NavComponent,
    CreateEventComponent
  ],
  providers: [AuthService,ValidatorService,AuthGuard],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
