import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, Jsonp} from '@angular/http';
import { observable } from 'rxjs/observable';

import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw'; 
@Injectable({
  providedIn: 'root'
})
export class UserService {
private basicUrl:string='http://localhost:8080/api';
private headers =new Headers({'Content-Type':'application/json'});
private options = new RequestOptions({headers:this.headers});

//Injecting http
constructor(private http:Http) { }
getUsers(){
return this.http.get(this.basicUrl+'/users',this.options).map(response:Response)=>response.json.catch(this.errorHandler);
}
errorHandler(error:Response){

}

}
