import { Component, Input, OnInit } from '@angular/core';
import { AnnouncementsService } from '../announcements.service';
import { Announcement } from '../model/annaouncement';

@Component({
  selector: '[app-announcement-row]',
  templateUrl: './announcement-row.component.html',
  styleUrls: ['./announcement-row.component.css']
})
export class AnnouncementRowComponent implements OnInit {
  @Input() announcement: Announcement;
  @Input() index: number;
  @Input() showButton: boolean = true;
  constructor(private announcementService: AnnouncementsService) { }

  ngOnInit(): void {

  }
  addToFavorite(event: Event) {
    event.stopPropagation();
    this.announcementService.addToFavorite(this.announcement);
  }
}
