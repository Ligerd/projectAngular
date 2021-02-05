import { Injectable } from "@angular/core";
import * as EventEmitter from "events";
import { ShopItem } from "./shopItem.model";

export class ShopService{
    // recipeSelected = new EventEmitter<ShopItem>();
    private shopItems: ShopItem[] = [new ShopItem("TestName","TestTitle","TestDescription","TestAuthor",1,"https://img.delicious.com.au/WqbvXLhs/del/2016/06/more-the-merrier-31380-2.jpg"),
    new ShopItem("TestName2","TestTitle2","TestDescription2","TestAuthor2",2,"https://miro.medium.com/max/1338/0*d8OZIzh-3QJ6eeoH.jpg")
];
    
    constructor(){
    }
    getShopItems(){
        return this.shopItems.slice();
    }
    getShipItem(id: number){
        return this.shopItems[id];
    }
}