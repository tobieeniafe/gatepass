import { NgModule }     from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { IndexComponent }     from './index/index.component';
import { LoginComponent }     from './login/login.component';
import { RegisterComponent }      from './register/register.component';
import { DashboardComponent }   from './organiser/dashboard/dashboard.component';
import { EventsComponent }   from './organiser/events/events.component';


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
