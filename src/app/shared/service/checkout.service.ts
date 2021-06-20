import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Checkout} from '../../model/checkout';
const    baseUrl='http://localhost:3000/checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpC:HttpClient) { }
  addCheckOut(object):Observable<Checkout>{
    return this.httpC.post<Checkout>(baseUrl,object)
  }
}
