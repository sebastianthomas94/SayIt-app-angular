import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { FileSelectDirective } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { SayitcomService } from "./sayitcom.service";
import { SayComponent } from './say/say.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PreviewComponent } from './preview/preview.component';
import { MypostsComponent } from './myposts/myposts.component';
import { ViewpostComponent } from './viewpost/viewpost.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FileSelectDirective,
    SayComponent,
    HomeComponent,
    NewpostComponent,
    PreviewComponent,
    MypostsComponent,
    ViewpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SayitcomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
