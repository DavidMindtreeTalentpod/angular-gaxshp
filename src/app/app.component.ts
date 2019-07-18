import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import{User}from'./User';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 name = 'Angular';
  selectedUser:User;
  httpData:any;
  title="";
   url="https://jsonplaceholder.typicode.com/todos";
  constructor(private http:HttpClient){}
  ngOnInit(){
this.http.get(this.url).subscribe(data=>{
  this.httpData=data;
});
  }
  onSelect(user:User):void{
    this.selectedUser=user;
  }
}


