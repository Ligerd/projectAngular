import { Component, OnInit, ViewChild } from '@angular/core';
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
  announcements: Announcement[];
  loading: boolean=false;
  @ViewChild('f', { static: false }) slForm: NgForm;

  constructor(private announcementsService: AnnouncementsService, private spinnerService: SpinnerService) { 
    //this.announcements=announcementsService.getAnnouncements();
  }

  ngOnInit(): void {
    this.spinnerService.requestStarted();
    this.announcementsService.loadAnnouncements()
    .subscribe(
        res => {
            console.log("response");

            this.announcements=res.content;
            this.announcementsService.setAnnouncements(this.announcements);
            console.log(this.announcements[0]);
            this.loading=!this.loading;
            this.spinnerService.requestEnded();
        },
        err => {
            console.log("ERRORR")
        }
    )
  }
  applyFilter(event: Event){
    event.stopPropagation();
  }
  onDelete(){

  }
  onClear(){
    
  }
}
