import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../model/product';
import {HttpErrorResponse} from '@angular/common/http';
import {ProductService} from '../../../shared/service/product.service';
import {CategoryService} from '../../../shared/service/category.service';
import {Category} from '../../../model/category';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.scss']
})
export class ListProdComponent implements OnInit {
  productList:any=[]



  constructor(private serviceProduct:ProductService,private catService:CategoryService,private route:Router,private toastr:ToastrService) { }
totalLength:any
  page:number
  ngOnInit() {
  this.viewAllProducts()
    this.viewCategory()
  }

  public viewAllProducts() : void{
    this.totalLength=0
    this.serviceProduct.viewAllProducts().subscribe((response)=>{
        this.productList=response;
        // console.log(JSON.stringify(this.productList))
      },
      (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    )
    this.totalLength=this.productList.length

  }
catName:any
  public viewCategory(){
    this.catService.getCategory().subscribe((data)=>{
this.catName=data
      // console.log(JSON.stringify(data))
    })
  }

  goToCreate(){
  this.route.navigate(['products/create-product'])
  }
  goToUpdate(id){
  this.route.navigate(['products/update-product/'+id])
  }
goToDelete(id){
  this.serviceProduct.deleteProduct(id).subscribe(data=>{
    this.toastr.success("Product Deleted ")
    console.log('product deleted')
  },error => {
    this.toastr.error(error.message)
  })
}



}
