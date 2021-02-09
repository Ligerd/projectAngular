import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementsService } from './announcements/announcements.service';
import { AnnouncementRowComponent } from './announcements/announcement-row/announcement-row.component';
import { AnnouncementDetailComponent } from './announcement-detail/announcement-detail.component';
import { FavoriteAnnouncementComponent } from './favorite-announcement/favorite-announcement.component';


@NgModule({
  declarations: [LayoutComponent, AnnouncementsComponent, HeaderComponent, AnnouncementRowComponent, AnnouncementDetailComponent, FavoriteAnnouncementComponent],
  exports: [],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [AnnouncementsService]
})
export class LayoutModule { }
