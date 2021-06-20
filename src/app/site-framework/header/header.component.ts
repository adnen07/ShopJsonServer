import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../shared/service/category.service';
import {Router} from '@angular/router';
import {ProductService} from '../../shared/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
listUsers:any
  role_user=''
  pseudo=''
  constructor(private catS:CategoryService,private router:Router,private prodService:ProductService) {
  this.prodService.cartSubject.subscribe((data)=>{
    this.cartItem=data
  })
  }

  ngOnInit() {
  this.cartItemFunc()
  this.getRole_user()
  }
  getRole_user(){
  this.pseudo=localStorage.getItem('username')
  this.role_user=localStorage.getItem('role_user')
  }
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('role_user');
    localStorage.removeItem('localCart');
    localStorage.removeItem('total')
    this.router.navigate(['auth/login']).then(() => {
      window.location.href = window.location.protocol + '//' + window.location.host + '/auth/login';;
    })}
cartItem:number=0
  cartItemFunc(){
  if(localStorage.getItem('localCart')!=null){
    var cartCount=JSON.parse(localStorage.getItem('localCart'))
    console.log("number cart: "+cartCount)
this.cartItem=cartCount.length

  }
  }
}
