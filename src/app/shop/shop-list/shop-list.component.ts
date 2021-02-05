import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { ShopItem } from '../shopItem.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopItems: ShopItem[];

  constructor(private shopService: ShopService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.shopItems=this.shopService.getShopItems();
  }

  onNewRecipe(){
    // this.router.navigate(['new'], {relativeTo: this.route})
  }

}

