import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpinnerService } from '../spinner/spinner.service';
import { AnnouncementsService } from './announcements.service';
import { Announcement } from './model/annaouncement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  @Input() page: number = 1;
  itemsOnPage: number = 5;
  totalRecords: number;
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
          this.totalRecords = this.announcements.length;       
          this.spinnerService.requestEnded();
        },
        err => {
          console.log("ERRORR")
        }
      )
  }
  change(event) {
    console.log(event);
    this.page = event;
  }
  applyFilter(event: Event) {
    event.stopPropagation();
  }
  onDelete() {

  }
  onClear() {

  }
}
