import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:'',component:WelcomeComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'**',component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
