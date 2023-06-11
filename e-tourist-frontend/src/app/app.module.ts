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
      {path: 'login', component:LogInComponent},
      {path: 'register', component:CreateAccountComponent},
      {path: 'forgotPassword', component:ForgotPasswordComponent}
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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
