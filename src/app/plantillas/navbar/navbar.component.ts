import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
    this.checkSession();
  }

  checkSession(){
    if (localStorage.getItem('name')){
      return true;
    }
    return false;
  }

  closeSession(){
    localStorage.removeItem('name');
    this.router.navigate(['']);
  }
}
