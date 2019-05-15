import { Component, OnInit } from '@angular/core';
import{Apidata} from '../commonServices/apiService';
import {HttpAPI} from '../commonServices/HttpApiContacts';
import {Http, Response}from '@angular/http';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.css']
})
export class ApidataComponent implements OnInit {
  data:any={};
  todaydate:any={};
  constructor( private http:Http,private date:Apidata,private HttpApi:HttpAPI) { }

  ngOnInit() {
    this.todaydate=this.date.showTodayDate();// showing today date and time
    this.HttpApi.getData().subscribe(res=>{   /// hit the API
      this.data=res;
      console.log(this.data);}
 
    )
  }

}
