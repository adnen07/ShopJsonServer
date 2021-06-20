import { Component } from '@angular/core';
import {CategoryService} from './shared/service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpen=true
  title = 'shopJsonServer';

  listUsers:any
  role_user=''
  constructor(private catS:CategoryService,private router:Router) { }

  ngOnInit() {
    this.getRole_user()
  }
  getRole_user(){this.role_user=localStorage.getItem('role_user')
    console.log("role users !!"+this.role_user)
  }
  logout() {
    localStorage.removeItem('role_user');
    this.router.navigate(['auth/login']).then(() => {
      window.location.href = window.location.protocol + '//' + window.location.host + '/auth/login';;
    })}
  sideBarTogller(){
    this.sideBarOpen =!this.sideBarOpen
  }
}
