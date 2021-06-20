import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../shared/service/login.service';
import {Router} from '@angular/router';
import {Login} from '../../model/login';
import {CategoryService} from '../../shared/service/category.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  listUser: any
  role_user
  username

  constructor(private authService: LoginService, private router: Router, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.authService.login().subscribe((data) => {
      this.listUser = data
      console.log(this.listUser)

    })
  }

  loginProcess(form) {
    let accept = false
    const x = this.listUser.map(o => {
      if ((form.value.email_user === o.email) && (form.value.password_user === o.password)) {
        accept = true
        this.role_user = o.role
        this.username = o.pseudo
        localStorage.setItem('role_user', this.role_user)
        localStorage.setItem('username', this.username)
        console.log("-//////////////// " + this.role_user)
      } else {
        console.log("invalid !!")
      }

    })
    if (this.role_user === 'admin') {
      this.router.navigate(['admin/adminlte']).then(() => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/admin/adminlte';
        ;
      })
    } else {
      this.router.navigate(['products']).then(() => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/products';
      });
    }
    if (!accept) {
      this.toaster.error("Email Or Password invalid")
      this.router.navigate(['auth/login']).then(() => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/auth/login';
        ;
      })
    }
  }



}
