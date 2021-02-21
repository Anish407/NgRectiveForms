import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { ProductsComponent } from '../app/products/products.component';
import { NotfoundComponent } from '../app/notfound/notfound.component';
import { AppRoutingModule } from './routing,module';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { Form1Component } from './products/form1/form1.component';
import { ProductModule } from './products/product.moule';
import { Form2Component } from './products/form2/form2.component';
import { Reativeform1Component } from './reativeform1/reativeform1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationssComponent } from './validationss/validationss.component';
import { DuplicationsComponent } from './duplications/duplications.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    NavigationbarComponent,
    Reativeform1Component,
    ValidationssComponent,
    DuplicationsComponent,
   
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
