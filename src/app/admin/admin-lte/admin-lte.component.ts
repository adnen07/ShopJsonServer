import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-lte',
  templateUrl: './admin-lte.component.html',
  styleUrls: ['./admin-lte.component.scss']
})
export class AdminLTEComponent implements OnInit {
localS
  constructor(private router:Router) { }

  ngOnInit() {
    this.localS=localStorage.getItem('role_user')
    if(this.localS==='admin'){
      this.router.navigate(['admin/adminlte'])
    }
  }

}
