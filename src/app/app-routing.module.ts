import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path:'', redirectTo:'products', pathMatch:'full'},
  { path: 'admin', component:AdminHomeComponent, canActivate: [AdminGuardGuard]},
  { path:'products',
    children:[
      { path:'view', component: ProductViewComponent },
      { path:'edit', component: ProductEditComponent },
      { path:'view/:id', component: ProductIdComponent }
  ]}, 
  { path:'order/:id/:id2', component: OrderViewComponent },
  { path:'search', component: SearchComponent },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
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
