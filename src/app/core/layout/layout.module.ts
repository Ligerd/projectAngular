import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AnnouncementsComponent } from './announcements/announcements.component';


@NgModule({
  declarations: [LayoutComponent,AnnouncementsComponent, HeaderComponent],
  exports: [],
  imports: [
    RouterModule,
  ],
})
export class LayoutModule {}
