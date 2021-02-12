import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  // page: number = 1;
  // itemsOnPage: number = 5;
  // totalRecords: number;
  page: Page;
  announcements: Announcement[];
  constructor(private announcementsService: AnnouncementsService, private spinnerService: SpinnerService) {
  }
  ngOnInit(): void {
    this.spinnerService.requestStarted();
    this.announcementsService.loadAnnouncements()
      .subscribe(
        res => {
          this.announcements = res.content;
          this.announcementsService.setAnnouncements(this.announcements);
          this.page = res.page;
          // this.totalRecords = res.content.length;
          console.log(this.page);
          this.spinnerService.requestEnded();
        },
        err => {
          console.log("ERRORR")
        }
      )
  }
  changePageNumber(event: any) {
    // console.log(event);
    this.page.number = event;
    this.announcementsService.changePage(this.page).subscribe(
      res => {
        console.log("hello");
      },
      err => {
        console.log("ERRORR")
      }
    );
    // this.page = event;
    // console.log(this.pages);
    // this.page.number = event.target.value;
  }
  searchByTitle() {

  }

  selectChangeHandler(event: any) {

    this.page.size = +event.target.value;
    console.log("go  request");
    this.announcementsService.changePage(this.page).subscribe(
      res => {
        console.log("hello");
      },
      err => {
        console.log("ERRORR")
      }
    );
    // this.itemsOnPage=+event.target.value;

  }

  onDelete() {

  }

  onClear() {

  }
}
