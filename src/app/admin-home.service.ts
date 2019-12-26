import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { userDetails } from './userDetails';


@Injectable({
  providedIn: 'root'
})
export class AdminHomeService {

  user:userDetails;

  constructor(private http:HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:8080/register",user,{responseType:'text' as 'json'});
  }


  public getUsers(){
    return this.http.get("http://localhost:8080/getAllUsers");
  }

  public getRoles(){
    return this.http.get("http://localhost:8080/getRoles");
  }

  public setter(user:userDetails){
    this.user=user;
  }
  public getter()
  {
    return this.user;
  }
  



}
