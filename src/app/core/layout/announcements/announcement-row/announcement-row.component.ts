import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../model/annaouncement';

@Component({
  selector: '[app-announcement-row]',
  templateUrl: './announcement-row.component.html',
  styleUrls: ['./announcement-row.component.css']
})
export class AnnouncementRowComponent implements OnInit {
  @Input() announcement: Announcement;
  // @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
