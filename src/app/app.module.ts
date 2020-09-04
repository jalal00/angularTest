import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuappComponent } from './navBar/menuapp/menuapp.component';
import { CarsolComponent } from './carousel/carsol/carsol.component';
import { JumpComponent } from './jumbotron/jump/jump.component';
import { LastveloComponent } from './lastPosed/lastvelo/lastvelo.component';
import { PagentfoundComponent } from './notFound/pagentfound/pagentfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuappComponent,
    CarsolComponent,
    JumpComponent,
    LastveloComponent,
    PagentfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
