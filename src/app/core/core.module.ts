import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AnnouncementsComponent } from './layout/announcements/announcements.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    LayoutModule,
  
  ]
})
export class CoreModule {}
