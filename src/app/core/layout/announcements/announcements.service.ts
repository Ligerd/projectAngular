import { Injectable } from "@angular/core";
import { FavoriteService } from "../favorite-announcements/favorite.service";
import { Announcement } from "./model/annaouncement";
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiUrlProvider } from "src/app/shared/api-url-provider";
import { Observable } from "rxjs";
import { Page } from "./model/page";
@Injectable()
export class AnnouncementsService {
    private announcements: Announcement[] = [];
    constructor(private favoriteService: FavoriteService, private http: HttpClient, private apiUrlProvider: ApiUrlProvider) {
    }
    loadAnnouncements(): Observable<any> {

        return this.http.get<any>(this.apiUrlProvider.getBaseURL() + 'announcements');
    }
    setAnnouncements(announcements: Announcement[]) {
        this.announcements = announcements;
    }
    getAnnouncements() {
        return this.announcements.slice();
    }

    getAnnouncement(id: string) {
        return this.http.get<Announcement>(this.apiUrlProvider.getBaseURL() + `announcements/${id}`);
    }
    addToFavorite(announcement: Announcement) {
        this.favoriteService.addFavoriteAnnouncement(announcement);
    }
    changeOnPage(page: Page, title: string) {
        console.log(page);
        if (page != null && title == null) {
            let params = new HttpParams();
            Object.keys(page).forEach(key => {
                params = params.set(key, page[key]);
            });
            return this.http.get<any>(this.apiUrlProvider.getBaseURL() + 'announcements', { params: params });
        } else if (title != null && page == null) {
            let params = new HttpParams().set("title", title);
            return this.http.get<any>(this.apiUrlProvider.getBaseURL() + 'announcements', { params: params });
        }
    }
}