import { Component, OnInit, ViewChild } from '@angular/core';
import{IndiaData} from '../commonServices/treebookServices';
//import{EmployeeDetails} from '../commonServices/employeeDataServices';
import{GetEmployeeData} from '../commonServices/getEmployeedataService';

@Component({
  selector: 'app-india-location',
  templateUrl: './india-location.component.html',
  styleUrls: ['./india-location.component.css']
})
export class IndiaLocationComponent implements OnInit {
  showdiv:boolean=false;
  title= "Welcome to Girmiti Software...";
  Locationdata:any={};
  EmployeeData:any={};
  constructor(private data:IndiaData,private getData:GetEmployeeData) { }
  ngOnInit(){
    this.Locationdata=this.data.getnodes();
    console.log(this.Locationdata);

    //this.EmployeeData=this.Employee.getcountryData();
    this.getData.getData().subscribe(res=>{   /// hit the API
      this.EmployeeData=res;
      console.log(this.EmployeeData);}
 
    )
    console.log(this.EmployeeData);
 
  }
  click(){
    this.showdiv=true;
  }

}
