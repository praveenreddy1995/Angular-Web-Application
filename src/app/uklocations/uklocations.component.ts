import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

import { ArticleService } from '../commonServices/EmployeeDataServices';
import { Article } from '../commonServices/Artical';

@Component({
  selector: 'app-uklocations',
    templateUrl: './uklocations.component.html',
     styleUrls: ['./uklocations.component.css']
})
export class UKlocationsComponent implements OnInit { 
   //Component properties
      allArticles: Article[];
      statusCode: number;
      requestProcessing = false;
      articleIdToUpdate = null;
      processValidation = false;
      updateempDiv:boolean=false;
      showDetailes:boolean=false;
      mngmtLoginDiv:boolean=true;
      employeeForm: FormGroup;
      formdata:FormGroup;
   //Create form
   loginForm(){
      this.formdata = this.fb.group({
         uname:['',Validators.required],
         passwd:['',Validators.required],
    
       })
      }
       createForm() {
        this.employeeForm = this.fb.group({
            empid: ['',Validators.required],
            Fname: ['', Validators.required ],
            Lname: ['', Validators.required ],
            email: ['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")],
            phone: ['',Validators.required],
        });
      }
      onClickSubmit(data) {
        if (data.uname=="superadmin" && data.passwd=="Girmiti@1234") {
          this.updateempDiv=true;
           this.mngmtLoginDiv=false;
          this.showDetailes=true;
        } else {
           alert("Invalid Login");
           return false;
        }
      }
   //Create constructor to get service instance
   constructor(private articleService: ArticleService,private fb: FormBuilder) {
    this.createForm();
    this.loginForm();
   }
   //Create ngOnInit() and and load articles
   ngOnInit(): void {
        this.getAllArticles();
   }   
   //Fetch all articles
   getAllArticles() {
        this.articleService.getAllArticles()
	  .subscribe(
                data => this.allArticles = data,
                errorCode =>  this.statusCode = errorCode);   
   }
   //Handle create and update article
   Formsubmit() {
	  this.processValidation = true;   
	  if (this.employeeForm.invalid) {
	       return; //Validation failed, exit from method.
	  }   
	  //Form is valid, now perform create or update
    this.preProcessConfigurations();
	  let article = this.employeeForm.value;
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
	   .subscribe(article => {
	           this.articleIdToUpdate = article.id;   
	            this.employeeForm.setValue({ empid:article.empid, Fname: article.Fname, Lname: article.Lname,email:article.email,phone:article.phone });
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
      this.employeeForm.reset();	  
      this.processValidation = false;
   }
}






// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// import { ArticleService } from '../commonServices/CURDexamplService';
// import { Article } from '../commonServices/Artical';

// @Component({
//   selector: 'app-uklocations',
//      templateUrl: './uklocations.component.html',
//         styleUrls: ['./uklocations.component.css']
// })
// export class UKlocationsComponent implements OnInit { 
//    //Component properties
//    allArticles: Article[];
//    statusCode: number;
//    requestProcessing = false;
//    articleIdToUpdate = null;
//    processValidation = false;
//    //Create form
//    articleForm = new FormGroup({
//        title: new FormControl('', Validators.required),
//        category: new FormControl('', Validators.required)	   
//    });
//    //Create constructor to get service instance
//    constructor(private articleService: ArticleService) {
//    }
//    //Create ngOnInit() and and load articles
//    ngOnInit(): void {
//         this.getAllArticles();
//    }   
//    //Fetch all articles
//    getAllArticles() {
//         this.articleService.getAllArticles()
// 	  .subscribe(
//                 data => this.allArticles = data,
//                 errorCode =>  this.statusCode = errorCode);   
//    }
//    //Handle create and update article
//    onArticleFormSubmit() {
// 	  this.processValidation = true;   
// 	  if (this.articleForm.invalid) {
// 	       return; //Validation failed, exit from method.
// 	  }   
// 	  //Form is valid, now perform create or update
//           this.preProcessConfigurations();
// 	  let article = this.articleForm.value;
// 	  if (this.articleIdToUpdate === null) {  
// 	    //Generate article id then create article
//             this.articleService.getAllArticles()
// 	      .subscribe(articles => {
			 
// 		   //Generate article id	 
// 		   let maxIndex = articles.length - 1;
// 		   let articleWithMaxIndex = articles[maxIndex];
// 		   let articleId = articleWithMaxIndex.id + 1;
// 		   article.id = articleId;
		   
// 		   //Create article
//      	           this.articleService.createArticle(article)
// 			  .subscribe(successCode => {
// 				   this.statusCode = successCode;
// 				   this.getAllArticles();	
// 				   this.backToCreateArticle();
// 				 },
// 				 errorCode => this.statusCode = errorCode
// 			   );
// 		 });		
// 	   } else {  
//    	     //Handle update article
//              article.id = this.articleIdToUpdate; 		
// 	     this.articleService.updateArticle(article)
// 	        .subscribe(successCode => {
// 		     this.statusCode = successCode;
// 		     this.getAllArticles();	
// 		     this.backToCreateArticle();
// 		},
// 		errorCode => this.statusCode = errorCode);	  
// 	   }
//    }
//    //Load article by id to edit
//    loadArticleToEdit(articleId: string) {
//       this.preProcessConfigurations();
//       this.articleService.getArticleById(articleId)
// 	   .subscribe(article => {
// 	            this.articleIdToUpdate = article.id;   
// 	            this.articleForm.setValue({ title: article.title, category: article.category });
// 	   	    this.processValidation = true;
// 		    this.requestProcessing = false;   
// 	   },
//            errorCode =>  this.statusCode = errorCode);   
//    }
//    //Delete article
//    deleteArticle(articleId: string) {
//       this.preProcessConfigurations();
//       this.articleService.deleteArticleById(articleId)
// 	      .subscribe(successCode => {
// 		  //this.statusCode = successCode;
// 	  	  //Expecting success code 204 from server
// 		  this.statusCode = 204;
// 		  this.getAllArticles();	
// 		  this.backToCreateArticle();
// 		},
// 		errorCode => this.statusCode = errorCode);    
//    }
//    //Perform preliminary processing configurations
//    preProcessConfigurations() {
//       this.statusCode = null;
//       this.requestProcessing = true;   
//    }
//    //Go back from update to create
//    backToCreateArticle() {
//       this.articleIdToUpdate = null;
//       this.articleForm.reset();	  
//       this.processValidation = false;
//    }
// }
