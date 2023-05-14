import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private _http:HttpClient) { }

  baseUrl='https://localhost:7105/';

  Register(RegisterUser:any){
    let url=this.baseUrl+'api/User';
    return this._http.post(url,RegisterUser);
  }
  
  login(login:any){
    let url=this.baseUrl+'api/User/login';
    return this._http.post(url,login);
  }

}
