import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { GuestComponent } from './home/guest/guest.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ProfileSharedComponent } from './components/profile-shared/profile-shared.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { ProfileFollowersComponent } from './components/profile-followers/profile-followers.component';
import { ProfileFollowingComponent } from './components/profile-following/profile-following.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SinglePostScreenComponent } from './components/single-post-screen/single-post-screen.component';
import { NotFoundComponent } from './home/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GuestComponent,
    HeaderComponent,
    FooterComponent,
    ProfileSharedComponent,
    CreatePostComponent,
    EditPostComponent,
    ProfileFollowersComponent,
    ProfileFollowingComponent,
    ProfileComponent,
    SinglePostScreenComponent,
    NotFoundComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
