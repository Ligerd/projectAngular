import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsComponent } from './core/layout/announcements/announcements.component';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,     
    //     children: [
    //           {
    //             path: 'announcements',
    //             component: AnnouncementsComponent,
    //           },
    //         ],
    // }      
    }        
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutesModule {}
