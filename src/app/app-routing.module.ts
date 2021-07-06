import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authGuard';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ProfileSharedComponent } from './components/profile-shared/profile-shared.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { GuestComponent } from './home/guest/guest.component';
import { UserService } from './services/user.service';

const routes: Routes = [
  { path: '', redirectTo: '/guest', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'guest', component: GuestComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'create-post',
    component: CreatePostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shared-profile/:username',
    component: ProfileSharedComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserService, AuthGuard],
})
export class AppRoutingModule {}
