import { EventEmitter } from "@angular/core";
import { ShopItem } from "../shop/shopItem.model";

export class FavoriteService{
    favoritesItemsChanged = new EventEmitter<ShopItem[]>();
    private favoriteItems: ShopItem[]=[new ShopItem("TestName","TestTitle","TestDescription","TestAuthor",1,"https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg")];
    
    getFavoriteItems(){
        return this.favoriteItems.slice();
    }
    addItemToFavorite(item: ShopItem){
        this.favoriteItems.push(item);
        this.favoritesItemsChanged.emit(this.favoriteItems.slice());
    }
}