import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SpinnerService } from '../spinner/spinner.service';
import { AnnouncementsService } from './announcements.service';
import { Announcement } from './model/annaouncement';
import { Page } from './model/page';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  page: Page;
  announcements: Announcement[];
  title: string;
  constructor(private announcementsService: AnnouncementsService, private spinnerService: SpinnerService) {
  }
  ngOnInit(): void {
    this.spinnerService.setSpinnerStatus("start");
    this.announcementsService.loadAnnouncements()
      .subscribe(
        res => {
          this.announcements = res.content;
          this.announcementsService.setAnnouncements(this.announcements);
          this.page = res.page;
          console.log(this.page);
          this.spinnerService.setSpinnerStatus("stop");
        },
        err => {
          this.spinnerService.setSpinnerStatus("stop");
          console.log("ERRORR")
        }
      )
  }
  changePageNumber(event: any) {
    this.page.number = event;
    console.log(event)
    this.announcementsService.changeOnPage(this.page, null).subscribe(
      res => {
        console.log("Request change page");
      },
      err => {
        console.log("ERRORR")
      }
    );
  }
  selectChangeHandler(event: any) {
    this.page.size = +event.target.value;
    this.announcementsService.changeOnPage(this.page,null).subscribe(
      res => {
        console.log("Request change itemsOn page");
      },
      err => {
        console.log("ERRORR")
      }
    );
  }
  onSubmitFilter() {
    this.spinnerService.setSpinnerStatus("start");
    this.announcementsService.changeOnPage(null,this.title).subscribe(res => {
      this.spinnerService.setSpinnerStatus("stop");
    },
      error => {
        this.spinnerService.setSpinnerStatus("stop");
        console.log("Error" + error);
      })
  }
}
