import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunbirdVideoPlayerModule } from 'sunbird-video';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SunbirdVideoPlayerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
