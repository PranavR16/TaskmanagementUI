import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';
import { ReportComponent } from './components/report/report.component';
import { HomeComponent } from './components/home/home.component';

import { TaskService } from './services/task.service';
import { UserService } from './services/user.service';
import { ReportService } from './services/report.service';


@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    TaskComponent,
    UserComponent,
    ReportComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule // Include AppRoutingModule here
  ],
  providers: [TaskService, UserService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
