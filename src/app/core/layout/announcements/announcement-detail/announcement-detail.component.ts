import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AnnouncementsService } from '../announcements.service';
import { Announcement } from '../model/annaouncement';

@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})
export class AnnouncementDetailComponent implements OnInit {
  announcement: Announcement;
  id: number;
  constructor(private announcementService: AnnouncementsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id= +params['id'];
        this.announcement= this.announcementService.getAnnouncement(this.id)
      }
    )
  }
  addToFavorite(){
    this.announcementService.addToFavorite(this.announcement);
  }
}
