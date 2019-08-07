import { Injectable } from '@angular/core';
@Injectable()
export class IndiaData  {
    constructor() { }
     nodes = [
          {
            id: 1,
            name: 'Country',
            children: [
              { id: 2, name: 'India', children:[
              {
                id:3,name:"states",children:[
                  {id:4, name:"Andhra Pradesh", href: '../login/login.component.html'},
                  {id:5, name:"Arunachal Pradesh", href: 'logout'},
                  {id:6, name:"Assam"},
                  {id:7, name:"Bihar"},
                  {id:8, name:"Chhattisgarh"},
                  {id:9, name:"Goa"},
                  {id:10, name:"Gujarat"},
                  {id:11, name:"	Haryana"},
                  {id:12, name:"Himachal Pradesh"},
                  {id:13, name:"	Jammu and Kashmir"},
                  {id:14, name:"Jharkhand"},
                  {id:15, name:"Karnataka"},
                  {id:16, name:"Kerala"},
                  {id:17, name:"Madhya Pradesh"},
                  {id:18, name:"Maharashtra"},
                  {id:19, name:"Manipur"},
                  {id:20, name:"Meghalaya"},
                  {id:21, name:"Mizoram"},
                  {id:22, name:"Nagaland"},
                  {id:23, name:"Odisha"},
                  {id:24, name:"Punjab"},
                  {id:25, name:"Rajasthan"},
                  {id:26, name:"Sikkim"},
                  {id:27, name:"Tamil Nadu"},
                  {id:28, name:"Telangana"},
                  {id:29, name:"Tripura"},
                  {id:30, name:"Uttar Pradesh"},
                  {id:31, name:"Uttarakhand"},
                  {id:32, name:"West Bengal"},
                ]
              },
              {
                id:33,name:"Union Territories ",children:[
                  {id:34, name:"	Andaman and Nicobar Islands"},
                  {id:35, name:"Chandigarh"},
                  {id:36, name:"Dadar and Nagar Haveli"},
                  {id:37, name:"	Daman and Diu"},
                  {id:38, name:"	Delhi"},
                  {id:39, name:"Lakshadweep"},
                  {id:40, name:"Puducherry (Pondicherry)"},
                ]
              },
            ] },
              { id: 41, name: 'Us' },
              { id: 42, name: 'uk' },
            ]
          },
      
          {
            id: 4,
            name: 'root2',
            children: [
              { id: 5, name: 'child2.1' },
              {
                id: 6,
                name: 'child2.2',
                children: [
                  { id: 7, name: 'subsub' }
                ]
              }
            ]
          }
        ];
        options = {
          treeNodeTemplate: '<a *ngIf="node.data.href" href="node.data.href">{{ node.data.name }}</a> <span *ngIf="!node.data.href">{{ node.data.name }}</span>'
          }
          
        
        
    ngOnInit(){
    }

getnodes() {
    let locationData =this.nodes ;
    return locationData;
    //console.log(locationData);
 }
}