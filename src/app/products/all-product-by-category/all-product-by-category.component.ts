import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/service/product.service';
import {Product} from '../../model/product';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-all-product-by-category',
  templateUrl: './all-product-by-category.component.html',
  styleUrls: ['./all-product-by-category.component.css']
})
export class AllProductByCategoryComponent implements OnInit {
searchCategory = '';
productList:Product[];
  constructor(private activateRoute: ActivatedRoute,private serviceProduct:ProductService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.searchCategory = data.id;
    },
      (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    )
    this.searchCatProduct(this.searchCategory)
  }
  public searchCatProduct(id):void {
    this.serviceProduct.searchCatProduct(id).subscribe((dataCat) => {
      this.productList = dataCat;
    })
  }
}
