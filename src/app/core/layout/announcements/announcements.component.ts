import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from './announcements.service';
import { Announcement } from './model/annaouncement';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[];
  
  constructor(private announcementsServes: AnnouncementsService) { 
    this.announcements=announcementsServes.getAnnouncements();
  }

  ngOnInit(): void {
  }

}
