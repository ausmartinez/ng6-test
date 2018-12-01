import { RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';

import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { NavbarComponent } from './navbar/navbar.component';
=======
import { RobotsComponent } from './robots/robots.component';
import { RobotDetailsComponent } from './robot-details/robot-details.component';
>>>>>>> 18d64f830f371cbc935d23ed2e8bdb44434de4d6

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
<<<<<<< HEAD
    NavbarComponent
=======
    RobotsComponent,
    RobotDetailsComponent
>>>>>>> 18d64f830f371cbc935d23ed2e8bdb44434de4d6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
