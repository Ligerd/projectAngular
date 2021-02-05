import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ShopService } from '../shop.service';
import { ShopItem } from '../shopItem.model';

@Component({
  selector: 'app-shop-item-detail',
  templateUrl: './shop-item-detail.component.html',
  styleUrls: ['./shop-item-detail.component.css']
})
export class ShopItemDetailComponent implements OnInit {
  shopItem: ShopItem;
  id: number;
    constructor(private shopService: ShopService, private route: ActivatedRoute, private router: Router) { }
  
    ngOnInit() {
      const id = this.route.params.subscribe(
        (params: Params) => {
          this.id= +params['id'];
          this.shopItem= this.shopService.getShipItem(this.id);
        }
      );
    }
}
