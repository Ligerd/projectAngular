import { Injectable } from "@angular/core";
import * as EventEmitter from "events";
import { ShopItem } from "./shopItem.model";

export class ShopService{
    // recipeSelected = new EventEmitter<ShopItem>();
    private shopItems: ShopItem[] = [new ShopItem("TestName","TestTitle","TestDescription","TestAuthor",1,"https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
    new ShopItem("TestName2","TestTitle2","TestDescription2","TestAuthor2",2,"https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg")
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