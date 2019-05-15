import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule  } from 'angular-tree-component';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import { NgxGalleryModule } from 'ngx-gallery';
import { AppComponent } from './app.component';
import { HomeComponent } from './home1/home.component';
import { ServicesComponent } from './services/services.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login1/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SucessComponent } from './sucess/sucess.component';
import{Apidata} from './commonServices/apiService';
import {HttpAPI} from './commonServices/HttpApiContacts';
import {IndiaData} from './commonServices/treebookServices';
import {ArticleService} from './commonServices/EmployeeDataServices';
import{GetEmployeeData} from './commonServices/getEmployeedataService';
import{CommentService} from './commonServices/CommentsDataStoreService';
import {GetComments} from './commonServices/getcommentsdataService';
import { ApidataComponent } from './apidata/apidata.component';
import { IndiaLocationComponent } from './india-location/india-location.component';
import { USlocationsComponent } from './uslocations/uslocations.component';
import { UKlocationsComponent } from './uklocations/uklocations.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    GallaryComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SucessComponent,
    ApidataComponent,
    IndiaLocationComponent,
    USlocationsComponent,
    UKlocationsComponent,
    LifecycleHooksComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TreeModule.forRoot(),
    NgxGalleryModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'Register', component: RegisterComponent},
      { path: 'Gallery', component: GallaryComponent},
      { path: 'Services', component: ServicesComponent},
      { path: 'Contactus', component: ContactComponent},
      { path: 'sucess', component: SucessComponent},
      { path: 'Employee', component: IndiaLocationComponent},
      { path: 'Project', component: USlocationsComponent},
      { path: 'Managment', component: UKlocationsComponent},
      { path: 'Lifecycle', component: LifecycleHooksComponent}

   ])
  ],
  providers: [Apidata,HttpAPI,IndiaData,ArticleService,GetEmployeeData,CommentService,GetComments],
  bootstrap: [AppComponent]
})
export class AppModule { }
