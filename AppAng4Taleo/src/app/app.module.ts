import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import {ContactService} from '../services/contactService';
import {RouterModule, Routes} from '@angular/router';
import { ApiTaleoComponent } from './api-taleo/api-taleo.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiTaleoService} from '../services/api-TaleoService';
import { WideViewComponent } from './wide-view/wide-view.component';
import {FormsModule} from '@angular/forms';

const routes: Routes=[
  {path: 'contact' , component: ContactComponent},
  {path: 'api-taleo' , component: ApiTaleoComponent},
  {path: 'wide-view/:id' , component: WideViewComponent},
  {path:'',redirectTo:'/contact',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ApiTaleoComponent,
    WideViewComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule
  ],
  providers: [ContactService, ApiTaleoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
