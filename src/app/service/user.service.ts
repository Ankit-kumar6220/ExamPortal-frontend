import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //add user
//user variable type is any (object)
  public addUser(user:any){
    // return observerable
    return this.http.post(`${baseUrl}/user/`,user);
  }

  
}
