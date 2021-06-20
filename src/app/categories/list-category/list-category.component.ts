import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../shared/service/category.service';
import {Category} from '../../model/category';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})

export class ListCategoryComponent implements OnInit {
  listCat: any = []
  totalLength
  page: number

  constructor(private catService: CategoryService,private router:Router,private toastr:ToastrService) {
  }

  ngOnInit() {
    this.getAllCategory()
  }

  getAllCategory() {
    this.catService.getCategory().subscribe(data => {
      this.listCat = data
    })
    this.totalLength = this.listCat.length
  }

  goToCreate() {
    this.router.navigate(['categories/add-category'])
  }
  goToUpdate(id){
    this.router.navigate(['categories/update-cat/'+id])
  }
  goToDelete(id){
    this.catService.deleteCategory(id).subscribe(data=>{
      this.toastr.success('Category Deleted')
    },error => {
      this.toastr.error(error.message)
    })
  }
}
