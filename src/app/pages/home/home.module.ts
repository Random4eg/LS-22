import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CoffeCarouselComponent } from './coffe-carousel/coffe-carousel.component';
import { BeanCarouselComponent } from './bean-carousel/bean-carousel.component';
import { InputComponent } from './input/input.component';
import { DescriptionComponent } from './product/description/description.component';
import { SizeComponent } from './product/size/size.component';
import { PriceComponent } from './product/price/price.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    CoffeCarouselComponent,
    BeanCarouselComponent,
    InputComponent,
    DescriptionComponent,
    SizeComponent,
    PriceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
