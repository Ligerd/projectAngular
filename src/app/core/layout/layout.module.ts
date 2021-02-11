import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { AnnouncementsService } from './announcements/announcements.service';
import { AnnouncementRowComponent } from './announcements/announcement-row/announcement-row.component';
import { AnnouncementDetailComponent } from './announcements/announcement-detail/announcement-detail.component';
import { FavoriteAnnouncementComponent } from './favorite-announcements/favorite-announcement.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FavoriteService } from './favorite-announcements/favorite.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBarComponent } from './announcements/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent, AnnouncementsComponent, HeaderComponent, AnnouncementRowComponent, AnnouncementDetailComponent, FavoriteAnnouncementComponent, SpinnerComponent, SearchBarComponent],
  exports: [],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [AnnouncementsService, FavoriteService]
})
export class LayoutModule { }
