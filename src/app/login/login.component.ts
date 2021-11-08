import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInt } from '../modelos/Login.interface';
import { ResponseInt } from '../modelos/Response.interface';
import { LoginService } from '../servicios/api/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  errorStatus:boolean;

  constructor(private api:LoginService, private router:Router) {
    this.errorStatus = false;
   }

  ngOnInit(): void {
  }

  checkLocalStorage(){
    if (localStorage.getItem('name')){
      this.router.navigate(['csv']);
    }
  }

  onLogin(form:LoginInt){
    this.api.userLogin(form).subscribe(data => {
      let dataResponse : ResponseInt = data;
      if (dataResponse.status === "OK"){
        localStorage.setItem("name", dataResponse.name);
        localStorage.setItem("rol", dataResponse.rol.toString());
        alert("Bienvenido! " + localStorage.getItem('name'));
        this.router.navigate(['csv']);
      }else{
        this.errorStatus = true;
      }
    })
  }

}
