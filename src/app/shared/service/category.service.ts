import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../../model/category';
const url= 'http://localhost:3000/category'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpC:HttpClient) { }
getOneCat(id):Observable<any>{
    return this.httpC.get<any>(url+'/'+id)
}
  getCategory():Observable<any> {
    return  this.httpC.get<any>(url);
  }
  addCategory(cat):Observable<Category>{
  return this.httpC.post<Category>(url,cat)
  }
  deleteCategory(id):Observable<Category>{
    return this.httpC.delete<Category>(url+'/'+id)
  }
  updateCategory(objet,id):Observable<Category>{
    return this.httpC.put<Category>(url+'/'+id,objet)
  }
}
