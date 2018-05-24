import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchStringComponent } from './search-string/search-string.component';

import { Page } from "./search-string/page";
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchStringComponent,
    UserRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Page
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
