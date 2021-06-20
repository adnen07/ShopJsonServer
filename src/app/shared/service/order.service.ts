import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../../model/order';
import {HttpClient} from '@angular/common/http';
const    baseUrl='http://localhost:3000/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  addOrders(object):Observable<Order>{
    return this.http.post<Order>(baseUrl,object)
  }
}
