import { Component, OnInit } from '@angular/core';
import {Http, Response}from '@angular/http';
import 'rxjs/add/operator/map';
import{Apidata} from '../commonServices/apiService';
import {HttpAPI} from '../commonServices/HttpApiContacts';
import { Router} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  showdiv:boolean=false;
  data:any={};
  todaydate:any={};
  nIntervId:any;
  constructor( private http:Http,private date:Apidata,private HttpApi:HttpAPI,private router: Router ) { 
    setInterval(() => {
      this.todaydate=this.date.showTodayDate();
    }, 1);
  }
  ngOnInit(){ 
     // showing today date and time
  }
  

  click(){
    this.showdiv=true;
  }
 

}
