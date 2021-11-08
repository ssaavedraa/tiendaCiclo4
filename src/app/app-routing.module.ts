import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './plantillas/navbar/navbar.component';
import { CsvComponent } from './vistas/csv/csv.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'csv', component:CsvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, CsvComponent]