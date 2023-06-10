import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LogInComponent } from './components/account/log-in/log-in.component';
import { CreateAccountComponent } from './components/account/create-account/create-account.component';
import { ForgotPasswordComponent } from './components/account/forgot-password/forgot-password.component';
import { SlideInComponent } from './components/slide-in/slide-in.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    LogInComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,
    SlideInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
