import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopStartComponent } from "./shop/shop-start/shop-start.component";
import { ShopComponent } from "./shop/shop.component";


const appRouts: Routes = [
    {path: '', redirectTo: '/shop',pathMatch: 'full'},
    {path: 'shop', component: ShopComponent, children:[
        {path: '', component: ShopStartComponent}
    ]}
];
@NgModule({
    imports: [RouterModule.forRoot(appRouts)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}