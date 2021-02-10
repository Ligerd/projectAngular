import { Component, Injectable, OnInit } from '@angular/core';
import { Announcement } from '../announcements/model/annaouncement';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'app-favorite-announcement',
  templateUrl: './favorite-announcement.component.html',
  styleUrls: ['./favorite-announcement.component.css']
})
@Injectable()
export class FavoriteAnnouncementComponent implements OnInit {
  favoriteAnnouncements:  Announcement[]; 
  constructor(private favoriteService: FavoriteService) { 
    this.favoriteAnnouncements = favoriteService.getFavoriteAnnouncements();
   }

  ngOnInit(): void {
  }
}
