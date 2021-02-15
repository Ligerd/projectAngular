import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementDetailComponent } from './core/layout/announcements/announcement-detail/announcement-detail.component';
import { AnnouncementsComponent } from './core/layout/announcements/announcements.component';
import { FavoriteAnnouncementComponent } from './core/layout/favorite-announcements/favorite-announcement.component';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/announcements', pathMatch: 'full' },
  {
    path: 'announcements',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: AnnouncementsComponent
      },
      {
        path: 'favorite',
        component: FavoriteAnnouncementComponent
      },
      {
        path: ':id',
        component: AnnouncementDetailComponent
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutesModule { }
