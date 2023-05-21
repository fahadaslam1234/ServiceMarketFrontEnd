import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModuleComponent } from './Home-Module.component';
import { HeaderComponent } from './Header/Header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './Footer/Footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [HomeModuleComponent,HeaderComponent]
})
export class HomeModuleModule { }
