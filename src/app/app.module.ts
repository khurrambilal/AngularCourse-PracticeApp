import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsListComponent } from './friends-list/friends-list.component';
import { FamilyListComponent } from './family-list/family-list.component';
import { HobbiesListComponent } from './hobbies-list/hobbies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    FamilyListComponent,
    HobbiesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
