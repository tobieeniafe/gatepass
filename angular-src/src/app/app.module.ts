import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImageUploadModule } from 'angular2-image-upload';

import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AgmCoreModule } from '@agm/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventsComponent } from './components/organiser/events/events.component';
import { EventsService } from './components/organiser/events/events.service';
import { ProfileComponent } from './components/organiser/profile/profile.component';
import { ProfileService } from './components/organiser/profile/profile.service';
import { AuthService } from './services/auth.service';
import { ValidatorService } from './services/validator.service';
import { NavComponent } from './components/nav/nav.component';
import { AuthGuard } from './services/authguard.service';
import { RouteGuard } from './services/routeguard.service';
import { CreateEventComponent } from './components/organiser/create-event/create-event.component';
import { CreateEventService } from './components/organiser/create-event/create-event.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: IndexComponent },
  { path: 'login',  component: LoginComponent , canActivate: [RouteGuard] },
  { path: 'register',  component: RegisterComponent , canActivate: [RouteGuard] },
  { path: 'events', component: EventsComponent , canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent , canActivate: [AuthGuard] },
  { path: 'create-event', component: CreateEventComponent , canActivate: [AuthGuard] }
  //{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQTeEyrwUuonblZu8k9cCxErVDCw7qn1k',
      libraries: ["places"]
    }),
    ImageUploadModule.forRoot(),
    Ng2PageScrollModule
  ],
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    ProfileComponent,
    NavComponent,
    CreateEventComponent
  ],
  providers: [ AuthService, ValidatorService, AuthGuard, CreateEventService, EventsService, RouteGuard, ProfileService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
