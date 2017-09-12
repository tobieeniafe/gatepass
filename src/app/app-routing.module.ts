import { NgModule }     from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { IndexComponent }     from './index/index.component';
import { LoginComponent }     from './login/login.component';
import { RegisterComponent }      from './register/register.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: IndexComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},//, canActivate: [AuthGuard]
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
