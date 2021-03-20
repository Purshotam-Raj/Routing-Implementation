import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:'', redirectTo:'product-edit', pathMatch:'full'},
  { path:'products', component: ProductsComponent },
  { path:'product-view', component: ProductViewComponent },
  { path:'product-edit', component: ProductEditComponent },
  { path:'product/10', component: ProductIdComponent }, // this value should be dynamic
  { path:'order/:id/:id2', component: OrderViewComponent },
  { path:'search', component: SearchComponent },
  {path:'**', component: PageNotFoundComponent}
];

// Product value should be dynamic ;
// Redirecting the routes
// able to implement wild card route
// default route

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
