import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product';
import {ProductService} from '../../shared/service/product.service';
import {ToastrService} from 'ngx-toastr';
import {Category} from '../../model/category';
import {CategoryService} from '../../shared/service/category.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  fileImage:File=null
  productDetails={
    id: '',
    name: '',
    category_id: '',
    description: '',
    image_path: '',
    prise: '',
    rating: '',
    reviews: '',
    warranty: ''
  }
  productId = 0;
  catList:any=[]
  id_cat_selected

  constructor(private activateRoute: ActivatedRoute,private pService:ProductService,private toastr:ToastrService,private catService:CategoryService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.productId = data.id;
    });
    this.pService.viewProduct(this.productId).subscribe(dataP=>{
      this.productDetails=dataP
    })
    this.id_cat_selected=1
    this.getCategorie()
  }
  getCategorie():void{
    this.catService.getCategory().subscribe((dataC)=>{
      this.catList=dataC
    })
  }
  updateImage(event){
    this.fileImage=event.target.files[0]
  }
  updateProduct(form){
    let updateProduct = {
      id:form.value.id,
      name:form.value.product_name,
      category_id:this.id_cat_selected,
      description:form.value.product_description,
      image_path:"/assets/images/"+this.fileImage.name,
      prise:form.value.product_price,
      rating:form.value.product_rating,
      reviews:form.value.product_reviews,
      warranty:form.value.product_warranty,};
this.pService.updateProduct(updateProduct,this.productId).subscribe(dataUpdate=>{
  this.toastr.success("Updated Successfully")
},error => {
  this.toastr.error('Error Update !')
})
  }
}
