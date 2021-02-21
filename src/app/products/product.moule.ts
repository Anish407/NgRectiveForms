import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

import { ProductsComponent } from './products.component';

const routes:Routes=[
    {
        path:'Products',
        component:ProductsComponent,
        children:[
            {
                path:'form1',
                component:Form1Component
            },
            {
              path:'form2',
              component: Form2Component
            },
            {
              path:'',
              component: Form1Component,
              pathMatch:'full'
            }
        ]
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [
        Form1Component,
        ProductsComponent,
        Form2Component
    ],
    providers: [],
})
export class ProductModule { }
