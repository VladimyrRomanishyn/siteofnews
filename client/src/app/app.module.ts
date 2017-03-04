import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { appRoutes }  from './app.routes';
import { ComposedComponent }  from './composed-component/comoposed.component'
import { NotFoundComponent }  from './notfound-component/notfound.component'



@NgModule({
  imports:      [ BrowserModule, 
                 HttpModule,
                 FormsModule,
                 RouterModule.forRoot(appRoutes)
                ],
  declarations: [ AppComponent,
                  ComposedComponent,
                  NotFoundComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
