import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanalComponent } from './canal/canal.component';
import { VideoComponent } from './video/video.component';
import { Error404Component } from './error404/error404.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { GetvideosService } from './servicios/getvideos.service';
import {RouterModule}from '@angular/router';
import  * as fileSaver from 'file-saver';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    CanalComponent,
    VideoComponent,
    Error404Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    GetvideosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
