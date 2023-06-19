import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LogInComponent } from './components/account/log-in/log-in.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { CommonComponentComponent } from './components/common-component/common-component.component';
import { RoutesSearchComponent } from './components/routes-search/routes-search.component';
import { RoutesListComponent } from './components/routes-list/routes-list.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SettingsComponent } from './components/account/settings/settings.component';
import { FriendsComponent } from './components/account/friends/friends.component';
import { FriendProfileBoxComponent } from './components/account/friend-profile-box/friend-profile-box.component';
import { RouteListSingleRouteComponent } from './components/route-list-single-route/route-list-single-route.component';
import { RouteDetailsComponent } from './components/route-details/route-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { RouteNavigationComponent } from './components/route-navigation/route-navigation.component';

const routes: Routes = [
  {
    path: '', component: MainMenuComponent
  },
  {
    path: '',
    component: CommonComponentComponent,
    children: [
      {path: 'search', component: RoutesSearchComponent},
      {path: 'list', component: RoutesListComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'profile/:id', component: ProfileComponent},
      {path: 'friends/:id', component: FriendsComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'login', component:LogInComponent},
      {path: 'register', component:CreateAccountComponent},
      {path: 'forgotPassword', component:ForgotPasswordComponent},
      {path: 'routeDetails/:id', component:RouteDetailsComponent},
      {path: 'comments/:id', component:CommentsComponent},
      {path: 'navigation/:id', component:RouteNavigationComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LogInComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    CommonComponentComponent,
    RoutesSearchComponent,
    RoutesListComponent,
    ProfileComponent,
    SettingsComponent,
    FriendsComponent,
    FriendProfileBoxComponent,
    RouteListSingleRouteComponent,
    RouteDetailsComponent,
    CommentsComponent,
    RouteNavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterModule.forRoot(routes),
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
