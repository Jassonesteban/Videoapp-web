import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterComponent } from './register/register.component';
import { CanalComponent } from './canal/canal.component';
import { VideoComponent } from './video/video.component';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: InicioComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'canal', component: CanalComponent},
  {path: 'video/:id', component: VideoComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'notfound', component: Error404Component},

  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
