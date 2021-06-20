import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../shared/service/category.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
dataC={
  name:'',
  description:''
}
catId=0
  constructor(private catService:CategoryService,private toastr:ToastrService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(data => {
      this.catId = data.id;
    console.log(this.catId)})
  this.catService.getOneCat(this.catId).subscribe(data=>{
    this.dataC=data
    console.log(this.dataC)
  })

  }
updateCategory(form){
    let updateCat={
      id:this.catId,
      name:form.value.category_name,
      description:form.value.cat_description
    }
    this.catService.updateCategory(updateCat,this.catId).subscribe(data=>{
      this.toastr.success('category updated success')
    },error => {
      this.toastr.error(error.message)
    })
}
}
