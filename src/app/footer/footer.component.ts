import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import {Http, Response, Headers, RequestOptions } from "@angular/http";
import { Router} from '@angular/router';
import { SubscribeService } from '../commonServices/subscribemembers';
import { subscribedata } from '../commonServices/Artical';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  describeForm:FormGroup;
  allArticles: subscribedata[];
      statusCode: number;
      requestProcessing = false;
      articleIdToUpdate = null;
      processValidation = false;
  constructor(private http: Http, private router: Router,private articleService:SubscribeService,private fb: FormBuilder) { 
this.createSubscribe();
  }
  createSubscribe() {
    this.describeForm = this.fb.group({
  Email: ['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")],

})
}

  ngOnInit() {
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
if (this.describeForm.invalid) {
     return; //Validation failed, exit from method.
}   
//Form is valid, now perform create or update
this.preProcessConfigurations();
let article = this.describeForm.value;
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
          this.describeForm.setValue({ Email:Comments.email });
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
  this.describeForm.reset();	  
  this.processValidation = false;
}
  submit(){
    alert('submit query sucessfully');
  }

}
