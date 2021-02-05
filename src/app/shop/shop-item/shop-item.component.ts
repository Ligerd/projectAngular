import { Component, Input, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { ShopItem } from '../shopItem.model';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {
  @Input() shopItem: ShopItem;
  @Input() index: number;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
  }
}
