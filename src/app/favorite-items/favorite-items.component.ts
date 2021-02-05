import { Component, OnInit } from '@angular/core';
import { ShopItem } from '../shop/shopItem.model';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
  styleUrls: ['./favorite-items.component.css']
})
export class FavoriteItemsComponent implements OnInit {
  favoriteItems: ShopItem[];
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.favoriteItems=this.favoriteService.getFavoriteItems();
    this.favoriteService.favoritesItemsChanged.subscribe(
      (favoriteItems: ShopItem[])=>{
        this.favoriteItems=favoriteItems;
      }
    );
  }

}
