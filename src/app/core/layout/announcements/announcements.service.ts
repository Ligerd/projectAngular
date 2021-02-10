import { Injectable } from "@angular/core";
import { FavoriteService } from "../favorite-announcements/favorite.service";
import { Announcement } from "./model/annaouncement";
import { HttpClient } from '@angular/common/http';
import { ApiUrlProvider } from "src/app/shared/api-url-provider";
import { Observable } from "rxjs";
@Injectable()
export class AnnouncementsService {
    private announcements: Announcement[] = [];
    constructor(private favoriteService: FavoriteService, private http: HttpClient, private apiUrlProvider: ApiUrlProvider) {
    }
    loadAnnouncements():Observable<any>{
        // const httpParams = setListRequestParams(
        //     clientsPagination.page.number,
        //     clientsPagination.page.size,
        //     clientsPagination.sort,
        //     clientsPagination.filter
        //   );
      
          return this.http.get<any>(this.apiUrlProvider.getBaseURL() + 'announcements');
    }
    setAnnouncements(announcements: Announcement[]){
        this.announcements=announcements;
    }
    getAnnouncements() {
        return this.announcements.slice();
    }
    // loadAnnouncement(id: string): Observable<Announcement> {
    //     return this.http.get<Announcement>(this.apiUrlProvider.getBaseURL() + `announcements/${id}`);
    //   }
    getAnnouncement(id: string) {
        return this.http.get<Announcement>(this.apiUrlProvider.getBaseURL() + `announcements/${id}`);
    }
    addToFavorite(announcement: Announcement){
        this.favoriteService.addFavoriteAnnouncement(announcement);
    }
}