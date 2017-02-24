import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { ComposedComponent }  from './composed-component/comoposed.component';
//import { HeaderComponent }  from './header-component/header.component';
//import { ContentComponent }  from './content-component/content.component';
//import { FooterComponent }  from './footer-component/footer.component';

const appRoutes: Routes = [
 
  { path: '', component: ComposedComponent},
//  { path: '**', component: ComposedComponent }
];

@NgModule({
  imports:      [ BrowserModule, 
                 HttpModule,
                 RouterModule.forRoot(appRoutes)
                ],
  declarations: [ AppComponent,
                    ComposedComponent
//                  HeaderComponent,
//                  ContentComponent,
//                  FooterComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
