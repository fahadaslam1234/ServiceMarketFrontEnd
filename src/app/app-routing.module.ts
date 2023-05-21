import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeModuleComponent } from './Home-Module/Home-Module.component';
import { HeaderComponent } from './Home-Module/Header/Header.component';
const routes: Routes = [
  {
    path: '',  
    component: HomeModuleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
