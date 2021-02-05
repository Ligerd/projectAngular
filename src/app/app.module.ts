import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShopItemComponent } from './shop/shop-item/shop-item.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';

import { ShopComponent } from './shop/shop.component';
import { ShopStartComponent } from './shop/shop-start/shop-start.component';
import { ShopService } from './shop/shop.service';
import { ShopItemDetailComponent } from './shop/shop-item-detail/shop-item-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ShopComponent,
    ShopListComponent,
    ShopItemComponent,
    ShopStartComponent,
    ShopItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
