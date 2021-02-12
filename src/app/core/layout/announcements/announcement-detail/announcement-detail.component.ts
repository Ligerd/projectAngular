import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SpinnerService } from '../../spinner/spinner.service';
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
  constructor(private announcementsService: AnnouncementsService, private route: ActivatedRoute, private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {

        this.id = params['id'];

        this.spinnerService.requestStarted();
        this.announcementsService.getAnnouncement(this.id).subscribe(
          res => {
            console.log(res);
            this.announcement = res;
            this.spinnerService.requestEnded();
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
