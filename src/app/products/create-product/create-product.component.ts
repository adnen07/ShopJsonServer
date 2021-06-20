import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/service/product.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CategoryService} from '../../shared/service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  public catList:Category

selectedFile : File=null
id_cat_selected
  constructor(private productService:ProductService,private toaster:ToastrService,private catService:CategoryService) { }

  ngOnInit() {

    this.getCategorie()
    this.id_cat_selected=1

  }
  getCategorie():void{
  this.catService.getCategory().subscribe((dataC)=>{
    this.catList=dataC
  })
  }
  addImage(event){
  this.selectedFile=<File>event.target.files[0]
    console.log(this.selectedFile)
  }
  qnt:number=1
  addNewProduct(form){

      let newProduct = {
        id:Math.floor((Math.random() * 10000) + 1),
        name:form.value.product_name,
        category_id:this.id_cat_selected,
        qnt:this.qnt,
        description:form.value.product_description,
        image_path:"/assets/images/"+this.selectedFile.name,
        prise:form.value.product_price,
        rating:form.value.product_rating,
        reviews:form.value.product_reviews,
        warranty:form.value.product_warranty,};


this.productService.createProduct(newProduct).subscribe(data=>{
  this.toaster.success('Product Created Successful')
},error => {
  this.toaster.error('Error ')

  })
}}
