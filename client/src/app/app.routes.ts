import {  Routes } from '@angular/router';
import { ComposedComponent }  from './composed-component/comoposed.component'
import { NotFoundComponent }  from './notfound-component/notfound.component'

export const appRoutes: Routes = [
 
  { path: '', component: ComposedComponent},
  { path: '**', component: NotFoundComponent }
];