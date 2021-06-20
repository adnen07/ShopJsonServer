import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {ProductService} from '../../shared/service/product.service';
import {Product} from '../../model/product';
import {HttpErrorResponse} from '@angular/common/http';
import {DeleteProductComponent} from '../delete-product/delete-product.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productId ;
productList={
  id_p: '',
  name_p: '',
  category_id_p: '',
  qnt:'',
  description_p: '',
  image_path_p: '',
  prise_p: '',
  is_available_p: '',
  rating_p: '',
  reviews_p: '',
  vendor_name_p: '',
  warranty_p: ''
}
  constructor(private activateRoute: ActivatedRoute,private productService:ProductService,private route:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.productId = data.id;
    });
this.viewProduct(this.productId)
  }

  public viewProduct(id)  {
    this.productService.viewProduct(id).subscribe(response => {
        this.productList.id_p=response.id
        this.productList.name_p=response.name
        this.productList.category_id_p=response.category_id
      this.productList.qnt=response.qnt
        this.productList.description_p=response.description
        this.productList.image_path_p=response.image_path
        this.productList.prise_p=response.prise
        this.productList.is_available_p=response.is_available
        this.productList.rating_p=response.rating
        this.productList.reviews_p=response.reviews
        this.productList.vendor_name_p=response.vendor_name
        this.productList.warranty_p=response.warranty
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      })
    console.log("4545454545"+this.productList)
    return this.productList
  }
  deleteProd(id){
    id=this.productId
    this.productService.deleteProduct(id).subscribe(data=>{
      this.toastr.success("Product Deleted")
    },error => {
      this.toastr.error(error.message)
    })
    this.route.navigate(['/products'])
  }
  inc(prod){
  if(prod.qnt!=5)
prod.qnt+=1
  }
  dec(prod){
  if(prod.qnt!=1)
  prod.qnt-=1
  }

  itemsCart:any=[]
  addToCart(product){
  console.log(product)
    let cartDataNull=localStorage.getItem('localCart')
    if(cartDataNull==null){
      let storeDataGet:any=[]
      storeDataGet.push(product)
      localStorage.setItem('localCart',JSON.stringify(storeDataGet))
    }else{
      var id=product.id_p
      let index:number=-1
      this.itemsCart=JSON.parse(localStorage.getItem('localCart'))
      for(let i=0;i<this.itemsCart.length;i++){
        if(parseInt(id) === parseInt(this.itemsCart[i].id_p)){
          this.itemsCart[i].qnt=product.qnt
          index = i;
          break;
        }
      }
      if(index == -1){
        this.itemsCart.push(product)
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
      }else {
        localStorage.setItem('localCart',JSON.stringify(this.itemsCart))

      }
    }
    this.cartNumberFunc()
  }
  cartNumber:number=0
  cartNumberFunc(){
  var cartValue=JSON.parse(localStorage.getItem('localCart'))
    this.cartNumber=cartValue.length
    this.productService.cartSubject.next(this.cartNumber)
  }
}
