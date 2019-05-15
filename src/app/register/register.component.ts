import {Http, Response, Headers, RequestOptions } from "@angular/http";
 import { Router} from '@angular/router';
import{PasswordValidation } from './conformpassword.validation';
import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Angular Form Validation Tutorial';
   angForm: FormGroup;
   cutomerdata;
   constructor(private fb: FormBuilder,private http: Http, private router: Router) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       Fname: ['', Validators.required ],
       Lname: ['', Validators.required ],
       email: ['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")],
       phone: ['',Validators.required],
       pass:  ['',Validators.required],
       conpass:['',Validators.required]},{
          validator: PasswordValidation.MatchPassword,
    });
  }
  onClickSubmit1(data) {
    //  document.getElementById("custtable").style.display="";
    
        this.cutomerdata = [];
         var data1 = JSON.stringify(data); 
          localStorage.setItem('angForm',data1);
          console.log(this.cutomerdata);
          this.router.navigate(['sucess']);
       }
       login(){
        this.router.navigate(['login']);
       }
}