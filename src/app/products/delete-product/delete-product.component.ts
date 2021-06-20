import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../shared/service/product.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
productId = 0;
  constructor(private activateRoute: ActivatedRoute,private pService:ProductService,private toaster:ToastrService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.productId = data.id;
    });
    this.deleteP(this.productId)
  }
  deleteP (id) {
    this.pService.deleteProduct(id).subscribe(data=>{
      this.toaster.success("Product Deleted ")
      console.log('product deleted')
    },error => {
      this.toaster.error(error.message)
    })
  }
}
