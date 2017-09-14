import { NgModule }     from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { IndexComponent }     from './components/index/index.component';
import { LoginComponent }     from './components/login/login.component';
import { RegisterComponent }      from './components/register/register.component';
import { DashboardComponent }   from './components/organiser/dashboard/dashboard.component';
import { EventsComponent }   from './components/organiser/events/events.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: IndexComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },//, canActivate: [AuthGuard]
  { path: 'events', component: EventsComponent }
  //{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
