import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthGuardService} from "./helper/auth-guard.service";
import {IndexComponent} from "./layout/index/index.component";
import {AddPostComponent} from "./user/add-post/add-post.component";
import {UserPostsComponent} from "./user/user-posts/user-posts.component";
import {ProfileComponent} from "./user/profile/profile.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: IndexComponent, canActivate: [AuthGuardService]},
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService], children: [
      {path: '', component: UserPostsComponent, canActivate: [AuthGuardService]},
      {path: 'add', component: AddPostComponent, canActivate: [AuthGuardService]}
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
