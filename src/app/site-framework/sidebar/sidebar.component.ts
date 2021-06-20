import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../shared/service/category.service';
import {Category} from '../../model/category';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
categoryList:any;
catId:number
  role_user
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {

    this.categoryService.getCategory().subscribe(data =>{
      this.categoryList=data
    })
    this.getRole()

  }
getRole(){
  this.role_user=localStorage.getItem('role_user')
}
}
