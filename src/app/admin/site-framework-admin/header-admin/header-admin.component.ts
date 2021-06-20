import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {
  username
@Output() toggleSidebarForMe:EventEmitter<any>=new EventEmitter()
  constructor(private router:Router) { }

  ngOnInit() {
    this.username=localStorage.getItem('username')
  }
  toggleSidebar(){
  this.toggleSidebarForMe.emit()
  }
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('role_user');
    this.router.navigate(['auth/login']).then(() => {
      window.location.href = window.location.protocol + '//' + window.location.host + '/auth/login';;
    })}
}
