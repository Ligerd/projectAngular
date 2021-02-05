import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoriteItemsComponent } from "./favorite-items/favorite-items.component";
import { ShopItemDetailComponent } from "./shop/shop-item-detail/shop-item-detail.component";
import { ShopStartComponent } from "./shop/shop-start/shop-start.component";
import { ShopComponent } from "./shop/shop.component";


const appRouts: Routes = [
    {path: '', redirectTo: '/shop',pathMatch: 'full'},
    {path: 'shop', component: ShopComponent, children:[
        {path: '', component: ShopStartComponent},
        {path: ':id', component: ShopItemDetailComponent},
    ]},
    {path: 'favorite', component: FavoriteItemsComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRouts)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}