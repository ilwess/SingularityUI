import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatGridListModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule, 
  MatInputModule,
  MatOptionModule, 
  MatSelectModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingularityComponent } from './singularity/singularity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    SingularityComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule, 
    MatSelectModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    UserService,
    AuthService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
