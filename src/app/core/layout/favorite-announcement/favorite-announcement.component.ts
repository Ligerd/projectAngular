import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcements/model/annaouncement';

@Component({
  selector: 'app-favorite-announcement',
  templateUrl: './favorite-announcement.component.html',
  styleUrls: ['./favorite-announcement.component.css']
})
export class FavoriteAnnouncementComponent implements OnInit {
  private favoriteAnnouncements:  Announcement[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
