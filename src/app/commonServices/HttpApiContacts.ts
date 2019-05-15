import {Http, Response}from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/throw';
@Injectable()
export class HttpAPI {
    title="Api Works";
    private apiurl="https://jsonplaceholder.typicode.com/users";
    data:any={};
    constructor( private http:Http) { 
      console.log('Api getting called'); 
    }
  
    ngOnInit(){

        this.getData(); 
    }
    getData():Observable <Array<any>>{
      return this.http.get(this.apiurl)
      .map((result:Response)=>result.json())
      .catch((error : any) => Observable.throw('Server error'))
    }
  
  }