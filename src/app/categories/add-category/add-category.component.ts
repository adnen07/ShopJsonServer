import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../shared/service/category.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private catService:CategoryService,private toastr:ToastrService) { }

  ngOnInit() {
  }
  addNewCategory(form){
    let newCat={
      name:form.value.cat_name,
      description:form.value.cat_description
    }
    this.catService.addCategory(newCat).subscribe(data=>{
      this.toastr.success('Category Added !')
    },error => {
      this.toastr.error(error.message)
    })
  }
}
