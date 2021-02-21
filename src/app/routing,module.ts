import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DuplicationsComponent } from './duplications/duplications.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsComponent } from './products/products.component';
import { Reativeform1Component } from './reativeform1/reativeform1.component';
import { ValidationssComponent } from './validationss/validationss.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'rform1',
    component: Reativeform1Component
  },
  {
    path: 'validation',
    component: ValidationssComponent
  },
  {
    path: 'duplicate',
    component: DuplicationsComponent
  },
  {
    path: '',
    component: ProductsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [],
  declarations: [],
  providers: [],
})
export class AppRoutingModule { }
