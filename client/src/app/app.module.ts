import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header-component/header.component';
import { ContentComponent }  from './content-component/content.component';
import { FooterComponent }  from './footer-component/footer.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent,
                  HeaderComponent,
                  ContentComponent,
                  FooterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
