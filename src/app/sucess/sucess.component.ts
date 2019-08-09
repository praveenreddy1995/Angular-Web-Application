import { Component, OnInit } from '@angular/core';
import{Apidata} from '../commonServices/apiService';
import {GetComments} from '../commonServices/getcommentsdataService';
import {Http, Response}from '@angular/http';
import { CommentsData } from '../commonServices/Artical';
import { CommentService } from '../commonServices/CommentsDataStoreService';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {
  formdata
  sucessDiv:boolean=false
  
  mngmtLoginDiv:boolean=true
  allArticles: CommentsData[];
  statusCode: number;
  requestProcessing = false;
  articleIdToUpdate = null;
  processValidation = false;
  cutomerdata:Array<string> = [];
  commentsdata:Array<string>=[];
  constructor( private http:Http,private date:Apidata,private HttpApi:GetComments,private articleService:CommentService,private fb: FormBuilder) {
    this.loginForm();
   }
  ngOnInit() {
    this.HttpApi.getCommetsData().subscribe(res=>{   /// hit the API
      this.commentsdata=res;
      console.log(this.commentsdata);}
     
 
    )
  }
  loginForm(){
    this.formdata = this.fb.group({
       uname:['',Validators.required],
       passwd:['',Validators.required],
  
     })
    }
  
  onClickSubmit(data) {
    localStorage.setItem("username",data.uname)
    if (data.uname=="superadmin" && data.passwd=="Praveen@1234") {
      this.sucessDiv=true;
      this.mngmtLoginDiv=false;
       
    } else {
       alert("Invalid Login");
       return false;
    }
  }


  getAllArticles() {
    this.articleService.getAllArticles()
  .subscribe(
            data => this.allArticles = data,
            errorCode =>  this.statusCode = errorCode);   
  }
  deleteArticle(articleId: string) {
    this.preProcessConfigurations();
    this.articleService.deleteArticleById(articleId)
      .subscribe(successCode => {
    //this.statusCode = successCode;
      //Expecting success code 204 from server
    this.statusCode = 204;
    this.getAllArticles();	
    this.backToCreateArticle();
    location.reload();
  },
  errorCode => this.statusCode = errorCode);    
  }
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;   
  }
  //Go back from update to create
  backToCreateArticle() {
    this.articleIdToUpdate = null;
   // this.CommentsForm.reset();	  
    this.processValidation = false;
  }
  

}
