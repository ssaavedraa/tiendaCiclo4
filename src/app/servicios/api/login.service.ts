import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginInt } from 'src/app/modelos/Login.interface';
import { ResponseInt } from 'src/app/modelos/Response.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/user/'

  constructor(private http:HttpClient) { }

  userLogin(form:LoginInt):Observable<ResponseInt>{
    let direccion = this.url + "auth";
    return this.http.post<ResponseInt>(direccion, form);
  }
}
