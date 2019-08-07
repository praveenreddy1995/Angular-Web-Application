import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { FormGroup,  FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';

import { CommentsData } from './Artical';

@Injectable()

export class CommentService {
    //URL for CRUD operations
    articleUrl = "https://angularjson.herokuapp.com/commentsData";
    //Create constructor to get Http instance
    constructor(private http:Http, private fb: FormBuilder, private router: Router) { 
    }
    //Fetch all articles
    getAllArticles(): Observable<CommentsData[]> {
        return this.http.get(this.articleUrl)
	   .map(this.extractData)
	   .catch(this.handleError);

    }
    //Create article
    createArticle(article: CommentsData):Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.articleUrl, article, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
    //Fetch article by id
    getArticleById(articleId: string): Observable<CommentsData> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: cpHeaders });
	console.log(this.articleUrl +"/"+ articleId);
	return this.http.get(this.articleUrl +"/"+ articleId)
	   .map(this.extractData)
	   .catch(this.handleError);
    }	
    //Update article
    updateArticle(article: CommentsData):Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.articleUrl +"/"+ article.id, article, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
    //Delete article	
    deleteArticleById(articleId: string): Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: cpHeaders });
	return this.http.delete(this.articleUrl +"/"+ articleId)
	       .map(success => success.status)
               .catch(this.handleError);
    }	
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
    }
    
    
} 
