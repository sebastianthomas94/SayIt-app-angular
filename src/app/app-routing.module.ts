import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SayComponent } from './say/say.component';
import { HomeComponent } from './home/home.component';
import { NewpostComponent } from './newpost/newpost.component';
import { PreviewComponent } from './preview/preview.component';
import { MypostsComponent } from './myposts/myposts.component';
import { ViewpostComponent } from './viewpost/viewpost.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'say',  component: SayComponent, children:[
    {path: ':id', children:[{path:'home', component:HomeComponent},
    {path:'new', component:NewpostComponent, children:[{path:'preview', component:PreviewComponent}] },
	{path:'myposts', component:MypostsComponent, children:[{path:':id', component:ViewpostComponent}]}]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
