import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'

export const Approute: Routes = [
    {
        path : 'user',
        component: UserComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'login',
       component:LoginComponent
    },
    {
        path:'register',
        component:RegisterComponent
    }
];