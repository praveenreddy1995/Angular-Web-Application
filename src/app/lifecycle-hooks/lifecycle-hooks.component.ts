import { Component, OnInit, Input } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import{Apidata} from '../commonServices/apiService';
@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})

export class LifecycleHooksComponent {
 // @Input('title') title;
 title="reddy";
 message:string;
 todaydate:any={};
 parentMessage="Parent message"
  constructor(private data: Apidata) { }
 
  ngOnInit() {
    console.log("OnInit");
    this.data.currentMessage.subscribe(message => this.message = message);
    setInterval(() => {this.todaydate=this.data.showTodayDate();},1);
  }
  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
  ngDoCheck() {
    console.log("doCheck")
  }
 
  ngAfterContentInit() {
    console.log("afterContentInit")
  }
 
  ngAfterContentChecked() {
    console.log("afterContentChecked")
  }
 
  ngAfterViewInit() {
    console.log("afterViewInit")
  }
 
  ngAfterViewChecked() {
    console.log("afterViewChecked")
  }
 
  ngOnDestroy() {
    console.log("onDistroy")
  }

}
