import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../../model/login';
const baseUrl="http://localhost:3000/users"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpL:HttpClient) { }

  login():Observable<any>{
return this.httpL.get(baseUrl)
  }
}

