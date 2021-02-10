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
  id: string;
  loaded: boolean=false;
  constructor(private announcementsService: AnnouncementsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {

        this.id = params['id'];
        console.log(this.id);
        this.announcementsService.getAnnouncement(this.id).subscribe(
          res => {
            console.log(res);
            this.announcement = res;
            this.loaded=!this.loaded;
          },
          err => {
            console.log("Hello i am  not work" + err);
          }
        )

      }
    )
  }
  addToFavorite() {
    this.announcementsService.addToFavorite(this.announcement);
  }
}
