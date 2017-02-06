import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { ChatsComponent } from './chats/chats.component';

import { MdlModule } from 'angular2-mdl';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
