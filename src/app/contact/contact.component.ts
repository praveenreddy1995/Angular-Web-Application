import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import {Http, Response, Headers, RequestOptions } from "@angular/http";
import { Router} from '@angular/router';
import { CommentService } from '../commonServices/CommentsDataStoreService';
import { CommentsData } from '../commonServices/Artical';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  CommentsForm:FormGroup;
  allArticles: CommentsData[];
      statusCode: number;
      requestProcessing = false;
      articleIdToUpdate = null;
      processValidation = false;
  constructor(private http: Http, private router: Router,private articleService:CommentService,private fb: FormBuilder) {
    this.createform();
   }
  stateCtrl: FormControl;

  createform() {
        this.CommentsForm = this.fb.group({
      subject:['',Validators.required],
      name:['',Validators.required],
      Email: ['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")],
      phone:['',Validators.required],
      Comment:['',Validators.required],
 
    })
  }
  // onClickSubmits(data1){
  //   this.commentsdata = [];
  //    var data2 = JSON.stringify(data1); 
  //    localStorage.setItem('formdata1',data2);
  //   this.router.navigate(['sucess'])
  // }
  //Create ngOnInit() and and load articles
  ngOnInit(): void {
    this.getAllArticles();
}   
//Fetch all articles
//Fetch all articles
getAllArticles() {
  this.articleService.getAllArticles()
.subscribe(
          data => this.allArticles = data,
          errorCode =>  this.statusCode = errorCode);   
}
//Handle create and update article
onClickSubmits() {
this.processValidation = true;   
if (this.CommentsForm.invalid) {
     return; //Validation failed, exit from method.
}   
//Form is valid, now perform create or update
this.preProcessConfigurations();
let article = this.CommentsForm.value;
if (this.articleIdToUpdate === null) {  
  //Generate article id then create article
        this.articleService.getAllArticles()
    .subscribe(articles => {
   
   //Generate article id	 
   let maxIndex = articles.length - 1;
   let articleWithMaxIndex = articles[maxIndex];
   let articleId = articleWithMaxIndex.id + 1;
    article.id = articleId;
   
   //Create article
          this.articleService.createArticle(article)
    .subscribe(successCode => {
       this.statusCode = successCode;
       this.getAllArticles();	
       this.backToCreateArticle();
     },
     errorCode => this.statusCode = errorCode
     );
    
 });		
 } else {  
      //Handle update article
         article.id = this.articleIdToUpdate; 		
   this.articleService.updateArticle(article)
      .subscribe(successCode => {
     this.statusCode = successCode;
     this.getAllArticles();	
     this.backToCreateArticle();
    
},
errorCode => this.statusCode = errorCode);	  

 }

}
//Load article by id to edit
loadArticleToEdit(articleId: string) {
  this.preProcessConfigurations();
  this.articleService.getArticleById(articleId)
 .subscribe(Comments => {
         this.articleIdToUpdate = Comments.id;   
          this.CommentsForm.setValue({ Email:Comments.Email, subject: Comments.subject, name: Comments.name,phone:Comments.phone,Comment:Comments.Comment });
       this.processValidation = true;
    this.requestProcessing = false;   
 },
       errorCode =>  this.statusCode = errorCode);   
}
//Delete article
deleteArticle(articleId: string) {
  this.preProcessConfigurations();
  this.articleService.deleteArticleById(articleId)
    .subscribe(successCode => {
  //this.statusCode = successCode;
    //Expecting success code 204 from server
  this.statusCode = 204;
  this.getAllArticles();	
  this.backToCreateArticle();
},
errorCode => this.statusCode = errorCode);    
}
//Perform preliminary processing configurations
preProcessConfigurations() {
  this.statusCode = null;
  this.requestProcessing = true;   
}
//Go back from update to create
backToCreateArticle() {
  this.articleIdToUpdate = null;
  this.CommentsForm.reset();	  
  this.processValidation = false;
}
showComments(){
  this.router.navigate(['sucess']);
}

 }


