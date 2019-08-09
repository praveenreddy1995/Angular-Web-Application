import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   title="The User";
  constructor() { }
  adminLinks:boolean=false;
  Login:boolean=true;
  Logout:boolean=false;

  ngOnInit() {
  var loginname=localStorage.getItem('username');
    if(loginname =="PraveenReddy" ){
      this.title=loginname;
      this.adminLinks=true;
      this.Logout=true;
      this.Login=false;
    }
    if(loginname==null){
      this.Logout=false;
      this.Login=true;
    }else{
     
      this.Logout=true;
      this.Login=false;
    }
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });
  }
  logoutclick(){
    localStorage.removeItem('username');
    location.reload(); 
    this.Login=true;
    this.Logout=false;
    this.adminLinks=false;
  }

}
