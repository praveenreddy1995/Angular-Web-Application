export class Article {
    constructor(public id: number, public Fname: string,  public Lname : string, public email : string, public phone : string,public empid:number) { 
    }
 }
export class CommentsData{
    constructor(public id: number, public Email: string,  public subject : string, public name : string, public phone : string, public Comment:string) { 
    }
}
export class subscribedata{
    constructor(public id:number,public email:string){

    }
}



// export class Article {
//     constructor(public id: number, public title: string, public category: string) { 
//     }
//  }