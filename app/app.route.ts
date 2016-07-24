import { RouterOutlet, RouterConfig, provideRouter } from '@angular/router'
import { WelcomeComponent } from './welcome.component'
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component';
import { LandComponent } from './landing.component';

const routes:RouterConfig = [
    {path:'welcome', component: WelcomeComponent},
    {path:'login', component: LoginComponent},
    {path:'user', component: UserComponent},
    {path:'**', component: LandComponent}
];

export const appRouterProvider = [
    provideRouter(routes)
]